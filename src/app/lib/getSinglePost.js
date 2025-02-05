export default async function getSinglePosts(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}
