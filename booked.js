import connectMongoDB from '@/app/lib/mongodb'
require('dotenv').config();
import Booked from '@/models/booked';

export async function POST(req){
    const {choosedDate,choosedTimes,email, name, number} = await req.json();
    await connectMongoDB();
    await Booked.create({choosedDate,choosedTimes, email, name, number});
    return Response.json({ message: 'Booked' }, { status: 201 });
}


