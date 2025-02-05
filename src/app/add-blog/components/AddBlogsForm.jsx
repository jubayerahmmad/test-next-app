"use client";

import { postSingleBlog } from "@/app/actions/blogs/postSingleBlog";
import { useRouter } from "next/navigation";

const AddBlogsForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    // const addBlog = await fetch(
    //   `https://test-next-app-inky.vercel.app/api/items`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify({ name }),
    //   }
    // );
    const result = await postSingleBlog({ name });
    e.target.reset();
    router.push("/blogs");
    console.log(result);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-md border mt-6 space-y-3"
    >
      <div className="w-full">
        <label htmlFor="name" className="text-[15px] text-text font-[400]">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="bg-gray-900 text-white border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
        />
      </div>
      {/* <div className="w-full">
        <label htmlFor="blog" className="text-[15px] text-text font-[400]">
          Blog
        </label>
        <textarea
          name="blog"
          id="blog"
          rows={4}
          placeholder="Blog Details"
          className="bg-gray-900 text-white border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
        />
      </div> */}
      <button className="px-4 py-2 bg-gray-950 rounded-md border font-bold">
        Add Blog
      </button>
    </form>
  );
};

export default AddBlogsForm;
