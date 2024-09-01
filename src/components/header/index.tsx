"use client";

import useCompanies from "@/core/companies";
import { ICompanies } from "@/interfaces/companies";
import Image from "next/image";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function Header({
  companiesInfo,
}: {
  companiesInfo: ICompanies[] | null;
}) {
  const { companies, currentCompanie, initializeCompanies } = useCompanies();
  useEffect(() => {
    initializeCompanies(companiesInfo);
  }, []);
  return (
    <header className="bg-main-dark w-full p-6 text-white flex justify-between">
      <Image
        src="./images/logo-tractian.svg"
        className="pointer-events-none"
        width={150}
        height={10}
        alt="Logo Tractian"
      />
      <div className="flex gap-4">
        {companies?.map(({ name, id }) => (
          <button
            className={twMerge(
              "p-2 rounded-sm font-semibold flex gap-2 text-[12px] hover:scale-110 transition-all",
              currentCompanie.id === id ? "bg-main" : "bg-main-soft"
            )}
          >
            <Image
              src="./icons/location.svg"
              className="pointer-events-none"
              width={20}
              height={20}
              alt="Logo Tractian"
            />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </header>
  );
}
