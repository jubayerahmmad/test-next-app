"use server";

import { collectionNames, dbConnect } from "@/app/lib/dbConnect";

export const postSingleBlog = async (postedData) => {
  try {
    const result = await dbConnect(collectionNames.BLOGS).insertOne(postedData);
    revalidatePath("/blogs");
    return result;
  } catch (error) {
    console.log(error);
  }
};
