'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

const items = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Edit', href: '/edit' },
];

export default function NavBar() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
    <div className={`grid grid-cols-2 md:grid-cols-3 items-center py-6 px-6 max-w-7xl mx-auto font-sans transition-all duration-300  ${isScrolled ? 'backdrop-blur-md bg-background/60 border-b border-white/10 rounded-2xl shadow-lg' : ''}`}>
        {/* Left: Logo */}
        <div>
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </div>

        {/* Center: Nav Items */}
        <nav className="hidden md:flex justify-center gap-6">
          <ul className="flex items-center gap-6">
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-xl text-gray-400 hover:text-[color:var(--textcol)] transition-all ease-in-out duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Theme Button */}
        <div className="hidden md:flex justify-end">
          <button>Theme_Switch</button>
        </div>

        {/* Mobile Menu Button + Theme Button */}
        <div className="flex justify-end col-span-2 mt-2 md:hidden">
                    <button
            aria-label="Toggle mobile menu"
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            className="p-2 rounded-md border border-white/20 hover:bg-white/10 transition-all"
          >
            {isOpenMobileMenu ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex justify-end md:hidden col-span-2 mt-2">
          <button>Theme_Switch</button>
          </div>    
      </div>

      {/* Mobile Navigation Dropdown */}
      <div>
        {isOpenMobileMenu && (
          <nav className="md:hidden shadow-lg">
            <ul className="flex flex-col items-center gap-4 py-4 backdrop-blur-md bg-background/60 border-b border-white/10 rounded-2xl">
              {items.map((item) => (
                <li key={item.name} className="w-full text-center">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpenMobileMenu(false)}
                    className="block py-2 text-gray-400 hover:text-[color:var(--textcol)] transition-all ease-in-out duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
