import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    bookingDay: String,

    description: String,
    availableTimes: [String],
  },
  {
    timestamps: true,
  }
);



const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
