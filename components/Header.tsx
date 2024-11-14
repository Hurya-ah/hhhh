

import Link from "next/link";

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-primary text-white">
    <h1 className="text-2xl font-bold">Hurya</h1>
    <nav>
      <ul className="flex space-x-8">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
