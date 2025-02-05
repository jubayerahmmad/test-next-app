import Comments from "@/app/components/Comments";
import getPostComments from "@/app/lib/getPostComments";
import getSinglePosts from "@/app/lib/getSinglePost";
import { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
  const id = (await params).id;
  const post = await getSinglePosts(id);

  return {
    title: post.title,
    description: post.body,
  };
};

const Post = async ({ params }) => {
  const id = (await params).id;
  const postPromise = getSinglePosts(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await postPromise;

  return (
    <div className="mt-6 py-4">
      <h1>Post {id}</h1>
      <h2 className="font-bold">{post.title}</h2>
      <p className="mt-4 py-3">{post.body}</p>

      <hr />

      <div className="mt-6">
        <h1 className="font-bold">Comments</h1>
        <Suspense fallback={"Loading Comments..."}>
          <Comments commentsPromise={commentsPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default Post;
