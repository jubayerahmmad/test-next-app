"use server";
import { collectionNames, dbConnect } from "@/app/lib/dbConnect";

export const getBlogs = async () => {
  try {
    const data = await dbConnect(collectionNames.BLOGS).find({}).toArray();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
