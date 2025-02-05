import { dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

// get singldata
export async function GET(req, { params }) {
  const id = await params;
  const result = await dbConnect("blogs").findOne({ _id: new ObjectId(id) });
  // return Response.json(result);
  return new Response(JSON.stringify(result));
}

// delete singldata
export async function DELETE(req, { params }) {
  const id = await params;
  const result = await dbConnect("blogs").deleteOne({ _id: new ObjectId(id) });
  return Response.json(result);
}

// update singldata
export async function PATCH(req, { params }) {
  const id = await params;
  const updatedData = await req.json();
  const filter = { _id: new ObjectId(id) };
  const updatedDoc = {
    $set: {
      ...updatedData,
    },
  };
  const result = await dbConnect("blogs").updateOne(filter, updatedDoc, {
    upsert: true,
  });
  return Response.json(result);
}
