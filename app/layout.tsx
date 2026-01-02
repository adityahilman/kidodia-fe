import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kidodia",
  description: "Karena setiap momen kecil itu berharga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
