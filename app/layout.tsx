import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer.tsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roads Bistro",
  description: "Resturant in Viginia Beach serving up tapas",
  openGraph: {
    title: "The Roads Bistro",
    description: "Food, drinks, and live music",
    type: "website",
    url: "https://theroadsbistro.com",
    siteName: "The Roads Bistro",
    images: [{
    url: 'https://imgur.com/gallery/aboutus-pZzpr4G',
    width: 1200,
    height: 630,}
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
