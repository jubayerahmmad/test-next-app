export default async function getAllVisas() {
  const visas = await fetch("https://visa-pilot-server.vercel.app/allVisas", {
    cache: "force-cache",
  });

  return visas.json();
}
