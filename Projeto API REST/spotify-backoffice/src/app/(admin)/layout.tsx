import { ReactNode } from "react";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <div>
      <Header></Header>
      {children}
      <Toaster
        toastOptions={{
          duration: 4000,
          style: { padding: "24px", color: "#fff", fontSize: "16px" },
          error: { style: { backgroundColor: "red" } },
          success: { style: { backgroundColor: "green" } },
        }}
      />
    </div>
  );
}
