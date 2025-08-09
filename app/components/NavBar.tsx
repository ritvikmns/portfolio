'use client'



import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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
  const { setTheme,resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center py-4">
      <div className={`w-2/5 h-14 flex items-center justify-between px-8 py-3 rounded-2xl transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-lg border border-opacity-10 shadow-lg' 
          : ''
      }`}
        style={{
          border: isScrolled ? '1px solid var(--textcol)': 'none',
          background: isScrolled ? 'rgba(var(--background-rgb), 0.9)' : 'var(--background)',
          color: 'var(--textcol)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          transition: 'backdrop-filter 0.5s ease-out, background 0.5s ease-out, box-shadow 0.5s ease-out',
          boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.12)': 'none',
        }}>
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" 
            />
            <span className="text-2xl font-semibold tracking-tight">Ritvik</span>
          </Link>
        </div>
        <div className="flex">
          <nav className="flex items-center space-x-8">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium transition-all duration-200 hover:scale-105 group"
                style={{
                  color: 'var(--textcol)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--textcol)';
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full" 
                  style={{ backgroundColor: 'var(--primary)' }}
                />
              </Link>
            ))}
            <div>
              <button
                onClick={() => resolvedTheme === 'light' ? setTheme('dark') : setTheme('light')}
                className="relative p-2 rounded-xl transition-all duration-300 hover:scale-110 group"
                style={{ 
                  color: 'var(--textcol)',
                  background: 'transparent',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  const btn = e.target as HTMLElement;
                  btn.style.borderColor = 'var(--primary)';
                  btn.style.backgroundColor = 'var(--primary)';
                  btn.style.color = 'var(--background)';
                }}
                onMouseLeave={(e) => {
                  const btn = e.target as HTMLElement;
                  btn.style.borderColor = 'transparent';
                  btn.style.backgroundColor = 'transparent';
                  btn.style.color = 'var(--textcol)';
                }}
              >
                {resolvedTheme == 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}