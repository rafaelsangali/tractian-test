"use client";

import useCompanies from "@/core/companies";

export default function MainTitle() {
  const { currentCompanie } = useCompanies();
  return (
    <>
      <h2 className="text-xl font-semibold text-neutral-gray mx-2">
        Ativos&nbsp;
        <span className="text-[#77818C] font-normal text-base">
          / {currentCompanie.name}
        </span>
      </h2>
    </>
  );
}
