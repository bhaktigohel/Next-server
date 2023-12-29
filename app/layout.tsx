import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Vedaant-Defining Smiles`,
  description:
    "Dr.Bhavin Tandel has been awared by WHO for his contribution in the health and cosmatic field.He saw his dreams come true in his son Mr.Jishaan Tandel, a passionate person about cricket.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} transition-colors`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
