import connectMongoDB from '@/app/lib/mongodb'
require('dotenv').config();
import Booking from '@/models/booking';



export async function GET(req) {
  
    await connectMongoDB();
    const booking = await Booking.find();
    return Response.json(booking)
  }
  


  const date = new Date();
  const HM = `${date.getHours()}:${date.getMinutes()}`;
  console.log(HM.toString());



  export async function POST(req) {
    const { bookingDay } = await req.json();
    console.log('bookingday modis aq',bookingDay)
    await connectMongoDB();
    const existingBooking = await Booking.findOne({ bookingDay });
  
    if (existingBooking) {
      // If the bookingDay already exists in the collection
      const availableTimes = existingBooking.availableTimes || [];
      return Response.json({ message: 'Booking day already exists', availableTimes }, { status: 200 });
    } else {
      // If the bookingDay doesn't exist in the collection
      // Create a new entry with the provided bookingDay and description
      const availableTimes = ['12:00 - 13:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '18:00 - 19:00', '20:00 - 21:00', '22:00 - 23:00', '23:00 - 00:00'];

      
      await Booking.create({ bookingDay, availableTimes });
      return Response.json({ message: 'Booking created' }, { status: 201 });
    }
  }




  export async function PATCH(req, { params }) {
    try {
      const { choosedTimes, idEnd, } = await req.json();
      console.log('deletedAt', choosedTimes);
      console.log('deletedID', idEnd);
  
      await connectMongoDB();
      
      await Booking.updateOne(
        { bookingDay: idEnd },
        { $pull: { availableTimes: { $in: choosedTimes } } }
      );
  
      return Response.json({choosedTimes}, { status: 200 });
    } catch (error) {
      console.error(error);
      return Response.json({ message: 'Error ' }, { status: 500 });
    }
  }
  

  





