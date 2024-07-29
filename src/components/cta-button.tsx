import Link from "next/link";

export const CTAButton = () => {
  return (
    <Link
      className="group mx-auto mb-12 flex w-max items-center gap-1 rounded-lg bg-blue-700 px-6 py-3 text-lg font-medium text-white shadow-md shadow-blue-700/50 transition-all duration-300 hover:bg-blue-800"
      href="/"
    >
      Wypróbuj 14 dni za darmo
      <svg
        className="size-6 stroke-white transition-all duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};
