'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import Image from "next/image";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        <ul className="flex space-x-6">
          <li>
            <Link href="https://github.com/MnLsVt" className="hover:text-blue-400 transition">
              <Image
                src={`https://raw.githubusercontent.com/Mnlsvt/bio-page/main/public/images/github.svg`}
                alt="Github"
                width={20}
                height={20}
                className="rounded-lg mr-2 bg-white"
                style={{ objectFit: 'contain' }}
                unoptimized
              />
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
