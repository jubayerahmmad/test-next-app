export const dynamic = "force-dynamic";

const Blog = async ({ params }) => {
  const id = (await params).id;
  const { NEXT_PUBLIC_URL_ADDRESS } = process.env;

  // const res = await fetch(`http://localhost:3000/api/items/${id}`);
  const res = await fetch(
    `https://test-next-app-inky.vercel.app/api/items/${id}`
  );
  // const res = await fetch(`${NEXT_PUBLIC_URL_ADDRESS}/api/items/${id}`);
  const SingleBlog = await res?.json();
  return (
    <div className="space-y-4 mt-5">
      <h1 className="font-bold text-xl">{SingleBlog.name}</h1>
      <p>{SingleBlog.blog}  </p> 
    </div>
  );
};

export default Blog;
