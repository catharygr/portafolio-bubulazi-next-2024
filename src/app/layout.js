import "./globals.css";
import localFont from "next/font/local";
import { BASE_METADATA } from "@/app/utilidades/constante";
import Header from "@/app/componentes/Header";
import Footer from "./componentes/Footer";

const monaSanzFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "fallback",
});

export const metadata = BASE_METADATA;

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={monaSanzFont.className}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
