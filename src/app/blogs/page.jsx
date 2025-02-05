import Link from "next/link";
import { dbConnect } from "../lib/dbConnect";
import { getBlogs } from "../actions/blogs/getBlogs";

export const dynamic = "force-dynamic";
const Blogs = async () => {
  // const { NEXT_PUBLIC_URL_ADDRESS } = process.env; // undefined?
  // // const res = await fetch(`${NEXT_PUBLIC_URL_ADDRESS}/api/items`);
  // const res = await fetch(`https://test-next-app-inky.vercel.app/api/items`); // still not working
  // // const res = await fetch(`http://localhost:3000/api/items`);
  // const blogs = await res.json();

  const blogs = await getBlogs();

  return (
    <div className="mt-6 text-center">
      <h1 className="font-bold text-xl text-center">Fathers of Real Madrid</h1>
      <div className="mt-6">
        {blogs.map((blog) => (
          <div key={blog._id}>
            <Link href={`/blogs/${blog._id}`}>{blog.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
