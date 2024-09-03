import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IMainContainer extends React.HTMLProps<HTMLElement> {
  children: ReactNode;
  classNameSection?: string;
}

export default function MainContainer(args: IMainContainer) {
  const { classNameSection, className, children } = args;

  return (
    <main
      className={twMerge(
        "bg-[#D8DFE6] p-2 flex flex-col min-h-[calc(100vh-5rem)]",
        className
      )}
    >
      <section
        className={twMerge(
          "bg-white w-full p-4 rounded-sm flex-grow",
          classNameSection
        )}
      >
        {children}
      </section>
    </main>
  );
}
