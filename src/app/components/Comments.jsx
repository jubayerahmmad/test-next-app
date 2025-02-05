const Comments = async ({ commentsPromise }) => {
  const comments = await commentsPromise;
  return (
    <div className="mt-4 border">
      {comments.map((comment) => (
        <p className="p-4" key={comment.id}>
          {comment.body}
        </p>
      ))}
    </div>
  );
};

export default Comments;
