import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema de caixa para operadores de caixa",
  description: "Sistema de Caixa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body>{children}</body>
    </html>
  );
}
