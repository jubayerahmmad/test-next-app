import { getServerSession } from "next-auth";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h2 className="text-4xl mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias explicabo
        tempora beatae voluptates, excepturi ipsum facilis sint reprehenderit
        saepe non ut voluptatum eaque quidem quis iste praesentium ratione.
        Nesciunt, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero, voluptate.
      </h2>
      <p className="font-bold my-4">FROM CLIENT COMPONENT: </p>
      <UserInfo />
      <p className="font-bold my-4">FROM SERVER COMP</p>
      {JSON.stringify(session)}
    </main>
  );
}
