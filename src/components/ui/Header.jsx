"use client";

import { useState } from "react";
import Link from "next/link";

import ThemeToggle from "../ThemeToggle";
import { LogoIcon } from "@/assets/icons/Icons";

const navbarLinks = [
  { label: "inicio", href: "/", ariaLabel: "inicio" },
  { label: "sobre mi", href: "/about", ariaLabel: "sobre mi" },
  { label: "proyectos", href: "/proyectos", ariaLabel: "proyectos" },
  { label: "tags", href: "/tags", ariaLabel: "tags" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900 mb-24">
      <nav className="w-full h-20 top-0 flex flex-wrap justify-center items-center fixed bg-white/95 lg:bg-white/70 dark:bg-[#1f2023]/95 dark:lg:bg-[#1f2023]/70 z-40 lg:backdrop-blur-xl">
        <div className="w-full flex justify-between items-center relative ">
          <Link href="/">
            <article className="flex flex-row gap-2 ml-8">
              <LogoIcon className={` w-8 h-8 dark:text-yellow-400`} />
              <h2 className="text-2xl font-bold">Raul Dev</h2>
            </article>
          </Link>
          <div className="hidden md:flex lg:items-center h-full pl-12 pb-2 gap-10 ml-8 mr-4">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <Link
                className="navLink "
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-4 mr-8">
            <ThemeToggle />
            <div
              className="md:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
              <div className="w-5 h-0.5 bg-gray-500 "></div>
            </div>
          </div>
          {/* Mobile navbar */}
          {isOpen && (
            <div className="flex flex-col h-fit mt-12 lg:hidden absolute top-4 left-0 bg-white/95 dark:bg-[#1f2023]/95 z-50 w-full items-center gap-4 pb-10 border-y border-solid border-[#303136] pt-10">
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <Link
                  key={href}
                  className="navLink"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </Link>
              ))}
              {/*     <SocialLinks /> */}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
