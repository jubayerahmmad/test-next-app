"use server";
import { dbConnect } from "@/app/lib/dbConnect";

const registerUser = async (userData) => {
  try {
    // need to check if user already exists
    const result = await dbConnect("users").insertOne(userData);
    console.log(result);
    return result;
  } catch (error) {
    console.log(null);
    return null;
  }
};

export default registerUser;
