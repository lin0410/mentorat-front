import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@features/providers/provider"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentorat-Front",
  description: "Talking with any teacher and professer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>  
        </body>
    </html>
  );
}
