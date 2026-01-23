import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <div className="border-4 border-red-800">
      <h1>Layout tracks</h1>
      {children}
    </div>
  );
}
