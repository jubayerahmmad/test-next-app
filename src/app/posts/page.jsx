import Link from "next/link";
import getAllPosts from "../lib/getAllPosts";

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto mt-10">
      <h1>All Posts</h1>
      <ul className="mt-6 list-disc">
        {posts.map((post) => (
          <li key={post.id} className="mt-2">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
