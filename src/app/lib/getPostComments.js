export default async function getPostComments(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.json();
}
