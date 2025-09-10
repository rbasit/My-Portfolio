import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"] });

export const metadata: Metadata = {
  title: "Rida Basit — Portfolio",
  description: "Computer Science student portfolio and projects.",
  metadataBase: new URL("https://RidaBasit.com"),
  openGraph: {
    title: "Rida Basit — Portfolio",
    description: "Projects, experience, and contact.",
    url: "https://RidaBasit.com",
    siteName: "Rida Basit — Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <Navbar />
        <main className="container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
