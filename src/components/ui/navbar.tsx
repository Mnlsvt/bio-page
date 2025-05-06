'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Image from "next/image";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={classNames(
        'bg-slate-950 text-white p-4 shadow fixed w-full z-50 transition-transform duration-300',
        {
          'transform -translate-y-full': !isVisible,
          'transform translate-y-0': isVisible,
        }
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
          Manolis Vettas
        </Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul
          className={classNames(
            'lg:flex lg:space-x-6 lg:static lg:flex-row lg:bg-transparent lg:w-auto lg:items-center transition-all duration-300 ease-in-out overflow-hidden',
            {
              'max-h-0 opacity-0 lg:max-h-none lg:opacity-100': !isMenuOpen,
              'max-h-screen opacity-100': isMenuOpen,

              'absolute top-full left-0 w-full bg-slate-950 flex flex-col space-y-0 p-4 lg:space-y-0 lg:p-0': true,
            }
          )}
        >
          <li>
            <Link href="https://github.com/MnLsVt" className="hover:text-blue-400 transition">
              Github
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}