import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteCondig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteCondig.name,
    template: `%s | ${siteCondig.name}`, // My-Organization | Taskify
  },
  description: siteCondig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
