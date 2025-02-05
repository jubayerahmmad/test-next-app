"use server";

import { dbConnect } from "@/app/lib/dbConnect";

export const postSingleBlog = async (postedData) => {
  try {
    const result = await dbConnect("blogs").insertOne(postedData);
    revalidatePath("/blogs");
    return result;
  } catch (error) {
    console.log(error);
  }
};
