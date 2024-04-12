import connectMongoDB from '@/lib/mongodb'
require('dotenv').config();
import Topic from '@/models/topic';


export async function POST(req){
  console.log(req)
    const {title, description} = await req.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return Response.json({message: 'topic created'}, {status: 201})

}

export async function GET(req) {
  await connectMongoDB();
   const topics = await Topic.find()
  return Response.json({topics})
}



export async function DELETE(req){
    const id = req.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return Response.json({message: 'deleted'}, {status: 200})
}