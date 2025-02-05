import { dbConnect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect("blogs").find().toArray();
  // return Response.json(data);
  return new Response(JSON.stringify(data));
}

export async function POST(req) {
  const postedData = await req.json();

  const result = await dbConnect("blogs").insertOne(postedData);
  revalidatePath("/blogs");
  return Response.json(result);
}
