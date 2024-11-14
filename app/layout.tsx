import Link from 'next/link';
import './globals.css'; // Import global styles

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <header className="flex justify-between items-center p-6 bg-primary text-white">
          <h1 className="text-3xl font-bold">Hurya</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/home">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        {/* Footer positioned at the bottom */}
        <footer className="p-6 bg-primary text-white text-center mt-auto">
          <p>&copy; 2024 Hurya. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
