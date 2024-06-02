import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    img:String,
    name: String,
    author: String,
    duration: String,
    cost: String,
    description: String
  }

);


const Course = mongoose.models.Course || mongoose.model('Course', courseSchema) ;

export default Course;


