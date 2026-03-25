import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TechBackground from "@/components/ui/tech-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kritagya Pandey | CS Portfolio",
  description:
    "Portfolio of Kritagya Pandey, 3rd Year Computer Science student at Lovely Professional University, India. Showcasing projects, skills, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white relative overflow-x-hidden`}
      >
        <TechBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
