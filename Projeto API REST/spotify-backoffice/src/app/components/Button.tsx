import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <div className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-gray-50 bg-gray-800 hover:bg-gray-950 cursor-pointer">
      {children}
    </div>
  );
}
