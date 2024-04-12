import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";

export async function PUT(req, {params}) {

    const {id} = params;
    const {newTitle: title, newDescription: description} = await req.json()
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, description});
    return Response.json({message: 'Topic updated'},{status: 200} )
} 




export async function GET(req,{params}){
    const {id} = params;
    console.log(id)
    await connectMongoDB();
    const topic = await Topic.findOne({_id:id})
    return Response.json({topic}, {status:200});
}