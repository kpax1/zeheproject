import connectMongoDB from '@/lib/mongodb'
require('dotenv').config();
import Booking from '@/models/booking';



  export async function GET(req,{params}){
    const {id} = params;
    console.log('params',params)
    await connectMongoDB();
    const booking = await Booking.findOne({bookingDay: id});
    const acailableTimes = booking.availableTimes;
    return Response.json({acailableTimes}, {status:200});
}



