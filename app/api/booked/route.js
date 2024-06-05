// Import necessary modules
import connectMongoDB from '@/app/lib/mongodb';
import dotenv from 'dotenv';
import Booked from '@/models/booked';

// Load environment variables
dotenv.config();

export async function POST(req) {
    try {
        // Parse request body
        const { choosedDate, choosedTimes, email, name, number } = await req.json();
        console.log('Received data:', { choosedDate, choosedTimes, email, name, number });

        // Connect to MongoDB
        await connectMongoDB();
        console.log('Connected to MongoDB');

        // Create a new booking document
        const booking = await Booked.create({
            choosedDate, choosedTimes, email, name, number
        });
        console.log('Booking created:', booking);

        // Return a success response
        return new Response(JSON.stringify({ message: 'Booking created' }), {
            status: 201
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        return new Response(JSON.stringify({ message: 'Error creating booking', error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
