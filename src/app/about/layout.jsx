import Link from "next/link";

const AboutLayout = ({ children }) => {
  return (
    <main>
      <nav>
        <ul className="flex gap-6 mt-4">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
};

export default AboutLayout;
