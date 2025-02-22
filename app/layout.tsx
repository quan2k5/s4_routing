import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import B5 from "./B5,6/b5";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <B5></B5> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
