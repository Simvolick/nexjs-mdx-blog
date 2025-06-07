import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
  email?: string;
}

interface AirtableRecord {
  getId(): string;
}

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Get data submitted in request's body.
    const body: RequestBody = await request.json();

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('Newsletter subscription request:', { email: body.email });

    // Enhanced guard clause checks for email
    if (!body.email || typeof body.email !== 'string') {
      return NextResponse.json({ 
        message: 'Email is required and must be a string' 
      }, { status: 400 });
    }

    // Trim and validate email format
    const email = body.email.trim();
    
    if (!email) {
      return NextResponse.json({ 
        message: 'Email cannot be empty' 
      }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ 
        message: 'Invalid email format' 
      }, { status: 400 });
    }

    // Check if Airtable API key is configured
    if (!process.env.AIRTABLE_API_KEY) {
      console.error('Airtable API key not configured');
      return NextResponse.json({ 
        message: 'Server configuration error - please try again later' 
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
              "Email": email,
            }
          },
        ], function(err: any, records: AirtableRecord[]) {
          if (err) {
            console.error('Airtable error:', err);
            // Check for specific Airtable errors
            if (err.error === 'INVALID_REQUEST_MISSING_FIELDS') {
              reject(new Error('Missing required fields'));
            } else if (err.error === 'INVALID_REQUEST_UNKNOWN_FIELD') {
              reject(new Error('Invalid field configuration'));
            } else if (err.statusCode === 422) {
              reject(new Error('Validation error - email may already exist'));
            } else {
              reject(new Error('Database error'));
            }
            return;
          }
          
          if (records && records.length > 0) {
            records.forEach(function (record) {
              console.log('Created record with ID:', record.getId());
            });
            resolve(records);
          } else {
            reject(new Error('No record created'));
          }
        });
      });
    };

    // Wait for the Airtable operation to complete
    await createRecord();

    // Success response
    return NextResponse.json({ 
      message: `Successfully subscribed ${email}` 
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    
    // Handle different types of errors
    if (error instanceof Error) {
      if (error.message.includes('email may already exist')) {
        return NextResponse.json({ 
          message: 'This email is already subscribed to our newsletter.' 
        }, { status: 409 });
      } else if (error.message.includes('Database error')) {
        return NextResponse.json({ 
          message: 'Database error - please try again later.' 
        }, { status: 503 });
      }
    }
    
    return NextResponse.json({ 
      message: 'Failed to subscribe. Please try again later.' 
    }, { status: 500 });
  }
} 