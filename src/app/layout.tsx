import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luci: Mi Sol, Mi Luna y Mis Estrellas",
  description: "Experiencia privada y romántica creada por Diego para Luci.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
