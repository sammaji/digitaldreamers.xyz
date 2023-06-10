import "./globals.css";
import { Inter } from "next/font/google";
import OgImage from "@/public/logo_digital_dreamers.png";
import Head from "next/head";

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
      <Head>
        <meta
          property="og:image"
          content="https://github-production-user-asset-6210df.s3.amazonaws.com/116789799/244854298-ad63829a-226e-4c6a-825a-2c9fefc2adfd.png"
        />
      </Head>
      <body className={`${inter.className} overflow-x-hidden scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
