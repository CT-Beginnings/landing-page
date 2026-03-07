import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nodo — Laptops, redes y servidores para tu empresa",
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Venta de computadoras, redes y servidores para empresas a precio de mayoreo. Diagnóstico, implementación y soporte técnico. Envíos a todo México.",
  keywords: [
    "venta de computadoras para empresas",
    "laptops empresariales",
    "equipamiento TI",
    "computadoras empresariales México",
    "redes empresariales",
    "servidores para PyMEs",
    "Hermosillo",
    "Guadalajara",
    "Monterrey",
  ],
  openGraph: {
    title: "Nodo — Conectamos empresas con la tecnología correcta",
    description:
      "Venta de computadoras, redes y servidores para empresas a precio de mayoreo. Envíos a todo México.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
