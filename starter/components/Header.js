import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component
import logo from '../img/logo-light.svg'; // Import the image

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50 font-roboto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <nav className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/">
              <a className="flex-shrink-0 text-white p-2">
                <Image className='h-5' src={logo} height={40} width={100} alt="Logo" />
              </a>
            </Link>
            {/* Menu */}
            <ul className="hidden md:flex space-x-6 ml-auto px-5">
              <li>
                <Link href="/">
                  <a className="text-white hover:text-blue-200">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/explore">
                  <a className="text-white hover:text-blue-200">Explore</a>
                </Link>
              </li>
              <li>
                <Link href="/details">
                  <a className="text-white hover:text-blue-200">Item Details</a>
                </Link>
              </li>
              <li>
                <Link href="/author">
                  <a className="text-white hover:text-blue-200">Author</a>
                </Link>
              </li>
              <li>
                <Link href="/create">
                  <a className="text-white hover:text-blue-200">Create Yours</a>
                </Link>
              </li>
            </ul>
            {/* Mobile Menu Trigger */}
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <span className="text-xl">☰</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
