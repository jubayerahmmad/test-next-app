"use server";
import { dbConnect } from "@/app/lib/dbConnect";

export const getBlogs = async () => {
  try {
    const data = await dbConnect("blogs").find({}).toArray();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
