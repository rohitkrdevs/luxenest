import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "./providers";
import LayoutWrapper from "../components/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LuxeNest | Quiet Luxury Organic Furniture",
  description: "The pinnacle of modern furniture design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-[#F9F8F6] font-sans text-[#1A1A1A] flex flex-col justify-between selection:bg-[#E2DEC2] relative`}>
        <AppProviders>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
