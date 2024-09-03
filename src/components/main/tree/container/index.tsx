import { ReactNode } from "react";

interface ITreeContainer extends React.HTMLProps<HTMLElement> {
  children: ReactNode;
}

export default function TreeContainer({ children, className }: ITreeContainer) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-4 min-h-[calc(100vh-11rem)] w-[35%] max-w-[35%] rounded-sm border border-[#D8DFE6]">
        Primeiro Filho
      </div>
      <div className="flex-shrink-0 mr-2 mt-4 min-h-[calc(100vh-11rem)] w-[64%] max-w-[64%] rounded-sm border border-[#D8DFE6]">
        Segundo Filho
      </div>
    </div>
  );
}
