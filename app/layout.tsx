import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://nextjs-micro-cms-site.vercel.app/"),
  metadataBase: new URL("http://localhost3000"),
  title: {
    template: "%s | Tonosaki Seinosuke",
    default: "Tonosaki Seinosuke",
  },
  description: "Tonosakiのコーポレートサイトです",
  openGraph: {
    title: "Tonosakiのコーポレートサイト",
    description: "Tonosakiのコーポレートサイトです",
    images: ["/ogp.png"],
  },
  alternates: {
    // canonical: "https://nextjs-micro-cms-site.vercel.app/",
    canonical: "http://localhost:3000/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
