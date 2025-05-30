import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
  email?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    // Get data submitted in request's body.
    const body: RequestBody = await request.json();
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body);
  
    // Guard clause checks for email,
    // and returns early if it is not found
    if (!body.email) {
      // Sends a HTTP bad request error code
      return NextResponse.json({ data: 'Emails not found' }, { status: 400 });
    }
  
    // Found the email.
    // Sends a HTTP success code
    return NextResponse.json({ data: `${body.email}` }, { status: 200 });
} 