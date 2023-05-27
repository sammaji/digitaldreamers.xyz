import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Dreamers",
  description:
    "We help businesses enhance their digital presence by building websites, mobile apps and writing content.",
  keywords:
    "website, ui, ux, hybrid, desktop application, mobile app, software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
