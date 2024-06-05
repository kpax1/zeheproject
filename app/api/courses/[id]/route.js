import Course from "@/models/courses";
require("dotenv").config();
import connectMongoDB from "@/app/lib/mongodb";


export async function GET(req, { params }) {
  console.log("params from api", params);
  const { id } = params;
  console.log(id, "es aris kino");
  await connectMongoDB();
  const course = await Course.findOne({
    name: id,
  });
  return Response.json({ course }, { status: 200 });
}
