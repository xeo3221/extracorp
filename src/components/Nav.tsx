/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <nav className="sticky top-0 z-50 mb-16 border-b border-b-gray-200 bg-white lg:mb-24">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
        <Link href="/">
          <img className="w-44" src="/logo.svg" alt="Logo ExtraCorp" />
        </Link>
        <ul
          className={cn(
            "hidden items-center gap-6 lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row",
            isOpen &&
              "absolute left-0 top-20 flex h-[calc(100dvh-80px)] w-full flex-col justify-center bg-white",
          )}
        >
          <li>
            <Link
              className="tex-base text-gray-700 transition-all duration-300 hover:text-blue-700"
              href="/"
            >
              Funkcje
            </Link>
          </li>
          <li>
            <Link
              className="text-base text-gray-700 transition-all duration-300 hover:text-blue-700"
              href="/"
            >
              Cennik
            </Link>
          </li>{" "}
          <li>
            <Link
              className="text-base text-gray-700 transition-all duration-300 hover:text-blue-700"
              href="/"
            >
              Blog
            </Link>
          </li>{" "}
          <li>
            <Link
              className="text-base text-gray-700 transition-all duration-300 hover:text-blue-700"
              href="/"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              className="broder inline-block rounded-lg border-gray-300 px-6 py-2 text-base font-medium text-gray-700 shadow-md shadow-gray-300/50 transition-all duration-300 hover:bg-gray-50"
              href="/"
            >
              Zaloguj się
            </Link>
          </li>
          <li>
            <Link
              className="inline-block rounded-lg bg-blue-700 px-6 py-2 text-base font-medium text-white shadow-md shadow-blue-700/50 transition-all duration-300 hover:bg-blue-800"
              href="/"
            >
              Stwórz konto
            </Link>
          </li>
        </ul>
        <button
          className="space-y-2 lg:hidden"
          onClick={handleToggleOpen}
          aria-label="Przycisk menu"
        >
          <span
            className={cn(
              "rouded-lg block h-[3px] w-8 bg-gray-600",
              isOpen && "-translate-x-1",
            )}
          ></span>
          <span
            className={cn(
              "rouded-lg block h-[3px] w-8 bg-gray-600",
              isOpen && "translate-x-1",
            )}
          ></span>
          <span
            className={cn(
              "rouded-lg block h-[3px] w-8 bg-gray-600",
              isOpen && "-translate-x-1",
            )}
          ></span>
        </button>
      </div>
    </nav>
  );
};
