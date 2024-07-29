"use client";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

export const Pricing = () => {
  return (
    <section className="mx-auto mb-16 max-w-screen-2xl px-4 sm:px-8 lg:mb-24">
      <h2 className="mb-4 text-center text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
        Dostosuj plan do <span className="text-blue-700">swoich potrzeb</span>
      </h2>
      <p className="mb-12 text-center text-lg text-gray-700">
        Wybierz plan, który najlepiej pasuje do twojej firmy
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <Plan>
          <div className="mb-2 space-y-4 p-5">
            <span className="text-lg font-medium text-gray-700">
              Podstawowy
            </span>
            <div className="space-x-2">
              <span className="text-6xl font-medium text-gray-900">30ZŁ</span>
              <span className="text-base text-gray-700">mies.</span>
            </div>
            <p className="text-base text-gray-700">Do 10 pracowników</p>
            <Link
              className="px6 block rounded-lg bg-blue-700 py-3 text-center text-lg font-medium text-white shadow-md shadow-blue-700/50 transition-all duration-300 hover:bg-blue-800"
              href="/"
            >
              Wybierz pakiet
            </Link>
          </div>
          <hr className="mb-2 border-t border-gray-200" />
          <div className="p-5">
            <p className="mb-4 text-base font-medium">SZCZEGÓŁY</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Dostęp do podstawywch funkcji
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Podstawowa analityka i raporty
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                20GB dla każdego pracownika
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Podstawowa opieka techniczna
              </li>
            </ul>
          </div>
        </Plan>
        <Plan>
          <div className="mb-2 space-y-4 p-5">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700">
                Rozszerzony
              </span>
              <span className="rounded-full border border-blue-500 bg-blue-50 px-3 py-0.5 text-sm text-blue-700">
                Popularny
              </span>
            </div>
            <div className="space-x-2">
              <span className="text-6xl font-medium text-gray-900">40ZŁ</span>
              <span className="text-base text-gray-700">mies.</span>
            </div>
            <p className="text-base text-gray-700">Do 25 pracowników</p>
            <Link
              className="px6 block rounded-lg bg-blue-700 py-3 text-center text-lg font-medium text-white shadow-md shadow-blue-700/50 transition-all duration-300 hover:bg-blue-800"
              href="/"
            >
              Wybierz pakiet
            </Link>
          </div>
          <hr className="mb-2 border-t border-gray-200" />
          <div className="p-5">
            <p className="mb-4 text-base font-medium">SZCZEGÓŁY</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Dostęp do podstawywch funkcji
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Podstawowa analityka i raporty
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                20GB dla każdego pracownika
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Podstawowa opieka techniczna
              </li>
            </ul>
          </div>
        </Plan>
        <Plan>
          <div className="mb-2 space-y-4 p-5">
            <span className="text-lg font-medium text-gray-700">Premium</span>
            <div className="space-x-2">
              <span className="text-6xl font-medium text-gray-900">60ZŁ</span>
              <span className="text-base text-gray-700">mies.</span>
            </div>
            <p className="text-base text-gray-700">Do 100 pracowników</p>
            <Link
              className="px6 block rounded-lg bg-blue-700 py-3 text-center text-lg font-medium text-white shadow-md shadow-blue-700/50 transition-all duration-300 hover:bg-blue-800"
              href="/"
            >
              Wybierz pakiet
            </Link>
          </div>
          <hr className="mb-2 border-t border-gray-200" />
          <div className="p-5">
            <p className="mb-4 text-base font-medium">SZCZEGÓŁY</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Dostęp do podstawywch funkcji
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Podstawowa analityka i raporty
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                20GB dla każdego pracownika
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700">
                <svg
                  className="size-5 stroke-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Podstawowa opieka techniczna
              </li>
            </ul>
          </div>
        </Plan>
      </div>
    </section>
  );
};

const Plan = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  return (
    <div
      className={cn(
        "min-w-96 translate-y-4 rounded-lg border border-gray-200 opacity-0 shadow-md shadow-gray-200/50 transition-all duration-1000",
        isInView && "transalete-y-0 opacity-100",
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};
