import type { Metadata } from "next";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Chris A.B.",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#1A191D]">
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
