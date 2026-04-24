import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, email, subject, message } = data;

        // Here you would typically:
        // 1. Validate the input data
        // 2. Send an email (e.g., using Nodemailer, SendGrid, Resend)
        // 3. Save the message to a database
        // 4. Perform any other necessary backend logic

        console.log('Contact form submission received:', { name, email, subject, message });

        // Simulate a successful response
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json({ message: 'Failed to send message.', error: error.message }, { status: 500 });
    }
}
