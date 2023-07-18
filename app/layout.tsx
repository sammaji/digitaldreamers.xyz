import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const title = "Digital Dreamers - Build Your Digital Presence | Web Application Development & Digital Marketing"
const description = "Transform your digital presence with our expert website development and digital marketing solutions. We specialize in helping businesses elevate their online visibility and drive success in today's competitive landscape."
const keywords = "website, digital marketing, ui ux, electron applications, desktop application, mobile app, software"

export const metadata: Metadata = {
  authors: {name: "Samybrata Maji", url: "https://twitter.com/samyabrata-maji"},
  title,
  description,
  keywords,
  icons: ["https://vercel.pub/favicon.ico"],
  openGraph: {
    title,
    description,
    images: ["https://www.digitaldreamers.xyz/logo_digital_dreamers.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://www.digitaldreamers.xyz/logo_digital_dreamers.png"],
    creator: "@sammaji15",
  },
  metadataBase: new URL("https://digitaldreamers.xyz"),
  category: "Digital Marketing Agency",
  creator: "Samyabrata Maji",
  publisher: "Vercel",
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
