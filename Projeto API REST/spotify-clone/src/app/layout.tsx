import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify - Web Player: Música para todos",
  description:
    "Ouça músicas, crie playlists e descubra novos artistas no Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme=""
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
