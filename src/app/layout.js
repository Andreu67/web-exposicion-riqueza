import { Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Web exposición",
  description: "Esta es la web de la exposición del grupo 2 de 6ºG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <link rel="icon" href="/logo-mascamarena.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
