import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Digital Dreamers - Build Your Digital Presence | Web Application Development & Digital Marketing",
  description:
    "Transform your digital presence with our expert website development and digital marketing solutions. We specialize in helping businesses elevate their online visibility and drive success in today's competitive landscape.",
  keywords:
    "website, digital marketing, ui ux, electron applications, desktop application, mobile app, software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
