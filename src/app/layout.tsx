import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import SideNav from "@/components/side-nav";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tools",
  description:
    "AI Tools is platform that gathered AI/ML related repositories on github.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex max-w-7xl mx-auto py-20 px-6 xl:px-0">
          <SideNav />

          <main className="w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
