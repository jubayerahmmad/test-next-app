"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

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
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
