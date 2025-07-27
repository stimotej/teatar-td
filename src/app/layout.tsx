import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/modules/layout/header";
import Footer from "@/modules/layout/footer";
import ScrollToTopButton from "@/modules/common/components/scroll-to-top";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Teatar &TD",
    default: "Teatar &TD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={`${interSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen p-6 md:p-8 lg:p-12">
          {children}
          <ScrollToTopButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
