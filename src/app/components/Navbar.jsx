"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const pathname = usePathname();
  // const session = await getServerSession(authOptions);
  if (pathname.includes("dashboard")) {
    return <></>;
  }
  return (
    <div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/visas">Visas</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/add-blog">Add Blog</Link>
          </li>
          {/* {session?.user ? (
            <>
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            </>
          ) : (
            <>
            
              <li>
                <button onClick={() => signIn()}>Login</button>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )} */}
          <li>
            <button onClick={() => signIn()}>Login</button>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <button onClick={() => signOut()}>Logout</button>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
