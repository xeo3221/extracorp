/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-4">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
          <Link href="/">
            <img className="w-36" src="/logo.svg" alt="Logo ExtraCorp" />
          </Link>
          <p className="text-base text-gray-700">
            © ExtraCorp. Wszelkie prawa zastrzezone
          </p>
        </div>
      </div>
    </footer>
  );
};
