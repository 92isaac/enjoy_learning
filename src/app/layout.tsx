import type { Metadata } from "next";
import { Geist, Geist_Mono, ABeeZee } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abeezee = ABeeZee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abeezee",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abeezee.variable} font-[abeezee] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
