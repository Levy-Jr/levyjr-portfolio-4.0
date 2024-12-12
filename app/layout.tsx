import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

export const metadata: Metadata = {
  title: "Levy Jr Portfolio",
  description: "Não é só um site, é uma experiência! Se você deseja aproveitar ao máximo as vantagens que a presença online pode oferecer, estou aqui para ajudar a transformar essa visão em realidade.",
};

const matter = localFont({
  src: [
    {
      path: "./fonts/Matter-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Matter-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/Matter-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
  ],
  display: "swap",
  variable: "--font-matter"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${matter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
