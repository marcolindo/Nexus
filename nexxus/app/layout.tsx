import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brasília Orgulho BRB",
  description: "Banco de Brasília + Brasília Orgulho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
