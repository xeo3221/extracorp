/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { CTAButton } from "./cta-button";

export const Hero = () => {
  return (
    <section className="mx-auto mb-16 max-w-screen-2xl px-4 text-center sm:px-8 lg:mb-24">
      <Link
        className="group mx-auto mb-8 flex w-max gap-1 rounded-full bg-blue-50 px-3 py-0.5 text-sm text-blue-700 transition-all duration-300 hover:bg-blue-100"
        href="/"
      >
        Dołącz do nas na konferencji 24.08.2024
        <svg
          className="size-5 stroke-blue-700 transition-all duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M20 12L14 6M20 12L14 18"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <h1 className="mx-auto mb-8 max-w-6xl text-5xl font-semibold tracking-tighter text-gray-900 lg:text-7xl">
        Zarządzaj twoją firma <span className="text-blue-700">z łatwością</span>{" "}
        i <span className="text-blue-700">zwiększaj</span> swoje zyski
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis vero
        aliquid impedit rerum temporibus laudantium quaerat minus doloremque,
      </p>
      <CTAButton />
      <img
        className="mx-auto mb-12 w-full max-w-6xl rounded-lg"
        src="/hero-1.png"
        alt="Zdjęcie panelu"
      />
      <div className="relative flex h-12 items-center gap-6 overflow-x-hidden bg-gray-50 py-12 [mask-image:linear-gradient(to_right,transparent,#000,transparent)]">
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-0s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-1.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-2s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-2.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-4s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-3.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-6s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-4.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-8s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-5.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-10s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-6.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-12s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-7.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-14s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-8.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-16s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-9.svg"
          alt="Logo firmy"
        />
        <img
          className="absolute left-[max(176px*10,100%)] h-12 w-44 animate-[slider_20s_linear_infinite_-18s] grayscale transition-all duration-300 hover:grayscale-0"
          src="/featured/featured-10.svg"
          alt="Logo firmy"
        />
      </div>
    </section>
  );
};
