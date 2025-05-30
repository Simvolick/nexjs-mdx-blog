import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
  email?: string;
}

interface AirtableRecord {
  getId(): string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Get data submitted in request's body.
    const body: RequestBody = await request.json();

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body);

    // Guard clause checks for email,
    // and returns early if it is not found
    if (!body.email) {
      // Sends a HTTP bad request error code
      return NextResponse.json({ data: 'Email not found' }, { status: 400 });
    }

    // Check if Airtable API key is configured
    if (!process.env.AIRTABLE_API_KEY) {
      console.error('Airtable API key not configured');
      return NextResponse.json({ 
        data: 'Server configuration error - Airtable API key missing' 
      }, { status: 500 });
    }

    const Airtable = require('airtable');
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appsWzk7HUwFP3BCO');

    // Convert callback-based Airtable operation to Promise
    const createRecord = (): Promise<AirtableRecord[]> => {
      return new Promise((resolve, reject) => {
        base('Emails').create([
          {
            "fields": {
              "Email": `${body.email}`,
            }
          },
        ], function(err: any, records: AirtableRecord[]) {
          if (err) {
            console.error('Airtable error:', err);
            reject(err);
            return;
          }
          records.forEach(function (record) {
            console.log('Created record with ID:', record.getId());
          });
          resolve(records);
        });
      });
    };

    // Wait for the Airtable operation to complete
    await createRecord();

    // Found the email and successfully saved to Airtable.
    // Sends a HTTP success code
    return NextResponse.json({ 
      data: `Successfully subscribed ${body.email}` 
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      data: 'Failed to subscribe. Please try again.' 
    }, { status: 500 });
  }
} 