import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "@/components/TopNav";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abayomi Eniola - Frontend Developer",
  description:
    "Software Engineer specializing in React, Next.js, and Tailwind CSS. Building pixel-perfect, performant web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-noisy"></div>
        <div>
          <TopNav />
          <Suspense fallback={null}>{children}</Suspense>

          {/* {children} */}
        </div>
      </body>
    </html>
  );
}
