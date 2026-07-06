import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pottabathini Vivekananda",
  description:
    "Final-year CS student and full-stack developer. Built platforms handling 45K+ users and Rs. 16L+ in transactions. Open For Work",
  keywords: [
    "Pottabathini Vivekananda",
    "Vivekananda",
    "Full Stack Developer",
    "MERN Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Pottabathini Vivekananda" }],
  creator: "Pottabathini Vivekananda",
  openGraph: {
    type: "website",
    title: "Pottabathini Vivekananda",
    description:
      "Final-year CS student and full-stack developer. Built platforms handling 45K+ users and Rs. 16L+ in transactions. Open For Work",
    siteName: "Pottabathini Vivekananda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pottabathini Vivekananda",
    description:
      "Final-year CS student and full-stack developer. Built platforms handling 45K+ users and Rs. 16L+ in transactions. Open For Work",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
