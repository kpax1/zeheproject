import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    choosedDate: Date,
    choosedTimes: [String] || String,
    email: String,
    name: String,
    number: Number,
  },

  {
    timestamps: true,
  }
);


const Booked = mongoose.models.Booked || mongoose.model('Booked', bookSchema) ;

export default Booked;