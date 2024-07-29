/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Steps = () => {
  const [activStep, setActivStep] = useState(1);
  return (
    <section className="lg:mg-24 mb-16 py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
        <h2 className="mb-4 text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
          Tylko <span className="text-blue-700">3 kroki</span> do sukcesu
        </h2>
        <p className="mb-12 text-lg text-gray-700">
          Zobacz, jak niewiele potrzba, abyś zaczął zarabiać więcej.
        </p>
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <button
              className={cn(
                "grid grid-cols-[40px_1fr] place-items-baseline border-l-4 border-l-gray-200 py-6 pl-4 text-left",
                activStep === 1 && "border-l-blue-600",
              )}
              onClick={() => setActivStep(1)}
            >
              <span
                className={cn(
                  "text-lg font-medium text-gray-900",
                  activStep === 1 && "text-blue-700",
                )}
              >
                01
              </span>
              <div>
                <span className="text-2xl font-medium text-gray-900">
                  Załóż konto w serwisie
                </span>
                <div
                  className={cn(
                    "grid grid-rows-[0fr] transition-all duration-300",
                    activStep === 1 && "grid-rows-[1fr]",
                  )}
                >
                  <span className="mt-1 overflow-hidden text-base text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem dolorem in maxime velit. Ea, laborum cumque! Quod
                    corrupti ab necessitatibus impedit illo! Mollitia eveniet
                    ipsa architecto.
                  </span>
                </div>
              </div>
            </button>
            <button
              className={cn(
                "grid grid-cols-[40px_1fr] place-items-baseline border-l-4 border-l-gray-200 py-6 pl-4 text-left",
                activStep === 2 && "border-l-blue-600",
              )}
              onClick={() => setActivStep(2)}
            >
              <span
                className={cn(
                  "text-lg font-medium text-gray-900",
                  activStep === 2 && "text-blue-700",
                )}
              >
                02
              </span>
              <div>
                <span className="text-2xl font-medium text-gray-900">
                  Utwórz swój zesół
                </span>
                <div
                  className={cn(
                    "grid grid-rows-[0fr] transition-all duration-300",
                    activStep === 2 && "grid-rows-[1fr]",
                  )}
                >
                  <span className="mt-1 overflow-hidden text-base text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem dolorem in maxime velit. Ea, laborum cumque! Quod
                    corrupti ab necessitatibus impedit illo! Mollitia eveniet
                    ipsa architecto.
                  </span>
                </div>
              </div>
            </button>
            <button
              className={cn(
                "grid grid-cols-[40px_1fr] place-items-baseline border-l-4 border-l-gray-200 py-6 pl-4 text-left",
                activStep === 3 && "border-l-blue-600",
              )}
              onClick={() => setActivStep(3)}
            >
              <span
                className={cn(
                  "text-lg font-medium text-gray-900",
                  activStep === 3 && "text-blue-700",
                )}
              >
                03
              </span>
              <div>
                <span className="text-2xl font-medium text-gray-900">
                  Zacznij zarządzać firmą
                </span>
                <div
                  className={cn(
                    "grid grid-rows-[0fr] transition-all duration-300",
                    activStep === 3 && "grid-rows-[1fr]",
                  )}
                >
                  <span className="mt-1 overflow-hidden text-base text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem dolorem in maxime velit. Ea, laborum cumque! Quod
                    corrupti ab necessitatibus impedit illo! Mollitia eveniet
                    ipsa architecto.
                  </span>
                </div>
              </div>
            </button>
          </div>
          <img
            className={cn(
              "hidden w-full translate-y-12 rounded-lg opacity-0",
              activStep === 1 && "animate-show block",
            )}
            src="/steps/step-1.png"
            alt="Zdjęcie panelu"
          />
          <img
            className={cn(
              "hidden w-full translate-y-12 rounded-lg opacity-0",
              activStep === 2 && "animate-show block",
            )}
            src="/steps/step-2.png"
            alt="Zdjęcie panelu"
          />
          <img
            className={cn(
              "hidden w-full translate-y-12 rounded-lg opacity-0",
              activStep === 3 && "animate-show block",
            )}
            src="/steps/step-3.png"
            alt="Zdjęcie panelu"
          />
        </div>
      </div>
    </section>
  );
};
