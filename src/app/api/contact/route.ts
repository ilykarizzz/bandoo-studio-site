import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  phone: z.string().optional(),
  service: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate with zod schema
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { name, email, message, phone, service } = result.data;

    // Log the submission - in production environment you would:
    // 1. Send an email via a service like Sendgrid, Mailgun, etc.
    // 2. Store in a database
    // 3. Create a ticket in a CRM system
    console.log('Contact form submission:', { 
      name, 
      email, 
      message,
      phone: phone || 'Not provided',
      service: service || 'Not specified',
      timestamp: new Date().toISOString() 
    });
    
    // Add artificial delay to simulate server processing
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}