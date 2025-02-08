import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_URI;

export const collectionNames = {
  BLOGS: "blogs",
  ADD_USER: "users",
};

export function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
}
