import connectMongoDB from "@/app/lib/mongodb";
require('dotenv').config();
import Course from '@/models/courses' 

export async function POST(req){
    const {img,name, author,cost, duration}= await req.json();
    await connectMongoDB();

    await Course.create({img,name, author,cost,duration});
    return Response.json({ message: 'course added' }, { status: 201 });
}   



export async function GET(req){ 
    try {
        // Get the URL and extract query parameters
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);
        const author = searchParams.get('author');

        // Connect to MongoDB
        await connectMongoDB();

        // If author query parameter is provided, filter courses by author
        if (author) {
            const filteredCourses = await Course.find({ author: author });
            return Response.json(filteredCourses);
        } else {
            // If no author query parameter is provided, return all courses
            const courses = await Course.find();
            return Response.json(courses);
        }
    } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error fetching courses:", error);
        return Response.status(500).json({ error: "Internal server error" });
    }
}