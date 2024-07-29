import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="mx-auto mb-16 max-w-screen-2xl px-4 sm:px-8 lg:mb-24">
      <div className="rounded-lg bg-blue-900 px-4 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center xl:flex-row xl:text-left">
          <div>
            <h2 className="text-semibold mb-2 text-3xl tracking-tight text-white">
              Wypróbuj 14 dni za darmo
            </h2>
            <p className="text-lg text-blue-200">
              Dołącz do ponad 4000 przedsiębiorców, którzy przyspieszyli rozrój
              swojej firmy.
            </p>
          </div>
          <Link
            className="transition-alldura inline-block rounded-lg bg-blue-700 px-6 py-3 text-lg font-medium text-white shadow-md shadow-blue-700/50 hover:bg-blue-800"
            href="/"
          >
            Zacznij juz teraz
          </Link>
        </div>
      </div>
    </section>
  );
};
