"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { CTAButton } from "./cta-button";

export const FAQ = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [isFourthOpen, setIsFourthOpen] = useState(false);

  return (
    <section className="mx-auto mb-16 max-w-screen-2xl px-4 text-center sm:px-8 lg:mb-24">
      <h2 className="mb-4 text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
        Masz jakieś <span className="text-blue-700">pytania</span>
      </h2>
      <p className="mb-12 text-lg text-gray-700">
        W tej sekcji postramy się na nie odpowiedzieć
      </p>
      <div className="mx-auto mb-12 max-w-4xl space-y-4">
        <button
          onClick={() => setIsFirstOpen((prev) => !prev)}
          className="rounded-lg border border-gray-200 p-4 text-left transition-all duration-300 hover:bg-gray-50"
        >
          <span className="flex items-center justify-between text-lg font-medium text-gray-900">
            Jakie wsparcie techniczne i szkolanie są dostępne po zakupie?
            <svg
              className={cn(
                "hidden size-6 shrink-0 stroke-gray-500",
                isFirstOpen && "block",
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={cn(
                "size-6 shrink-0 stroke-gray-500",
                isFirstOpen && "hidden",
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={cn(
              "grid grid-rows-[0fr] transition-all duration-300",
              isFirstOpen && "mt-1 grid-rows-[1fr]",
            )}
          >
            {" "}
            <span className="max-w-3xl overflow-hidden text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aliquid laudantium labore repellat quisquam odio? Ratione debitis
              neque tempora! Quidem facere debitis eos quas non necessitatibus
              voluptate tempore animi maxime.
            </span>
          </span>
        </button>
        <button
          onClick={() => setIsSecondOpen((prev) => !prev)}
          className="rounded-lg border border-gray-200 p-4 text-left transition-all duration-300 hover:bg-gray-50"
        >
          <span className="flex items-center justify-between text-lg font-medium text-gray-900">
            Czy panel jest łatwy w opsłudze i intuicyjny?
            <svg
              className={cn(
                "hidden size-6 shrink-0 stroke-gray-500",
                isSecondOpen && "block",
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={cn(
                "size-6 shrink-0 stroke-gray-500",
                isSecondOpen && "hidden",
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={cn(
              "grid grid-rows-[0fr] transition-all duration-300",
              isSecondOpen && "mt-1 grid-rows-[1fr]",
            )}
          >
            {" "}
            <span className="max-w-3xl overflow-hidden text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aliquid laudantium labore repellat quisquam odio? Ratione debitis
              neque tempora! Quidem facere debitis eos quas non necessitatibus
              voluptate tempore animi maxime.
            </span>
          </span>
        </button>
        <button
          onClick={() => setIsThirdOpen((prev) => !prev)}
          className="rounded-lg border border-gray-200 p-4 text-left transition-all duration-300 hover:bg-gray-50"
        >
          <span className="flex items-center justify-between text-lg font-medium text-gray-900">
            Jakie funkcjie oferuje panel do zarządzania firmą?
            <svg
              className={cn(
                "hidden size-6 shrink-0 stroke-gray-500",
                isThirdOpen && "block",
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={cn(
                "size-6 shrink-0 stroke-gray-500",
                isThirdOpen && "hidden",
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={cn(
              "grid grid-rows-[0fr] transition-all duration-300",
              isThirdOpen && "mt-1 grid-rows-[1fr]",
            )}
          >
            {" "}
            <span className="max-w-3xl overflow-hidden text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aliquid laudantium labore repellat quisquam odio? Ratione debitis
              neque tempora! Quidem facere debitis eos quas non necessitatibus
              voluptate tempore animi maxime.
            </span>
          </span>
        </button>
        <button
          onClick={() => setIsFourthOpen((prev) => !prev)}
          className="rounded-lg border border-gray-200 p-4 text-left transition-all duration-300 hover:bg-gray-50"
        >
          <span className="flex items-center justify-between text-lg font-medium text-gray-900">
            Czy Panel mozna dostosować do potrzeb mojej firmy?
            <svg
              className={cn(
                "hidden size-6 shrink-0 stroke-gray-500",
                isFourthOpen && "block",
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={cn(
                "size-6 shrink-0 stroke-gray-500",
                isFourthOpen && "hidden",
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={cn(
              "grid grid-rows-[0fr] transition-all duration-300",
              isFourthOpen && "mt-1 grid-rows-[1fr]",
            )}
          >
            {" "}
            <span className="max-w-3xl overflow-hidden text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aliquid laudantium labore repellat quisquam odio? Ratione debitis
              neque tempora! Quidem facere debitis eos quas non necessitatibus
              voluptate tempore animi maxime.
            </span>
          </span>
        </button>
      </div>
      <CTAButton />
    </section>
  );
};
