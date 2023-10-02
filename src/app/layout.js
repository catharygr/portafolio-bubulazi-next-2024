import "./globals.css";
import localFont from "next/font/local";
import { BASE_METADATA } from "@/app/utilis/Constante";
import Header from "@/app/componentes/Header";

const monaSanzFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "swap",
});

export const metadata = BASE_METADATA;

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={monaSanzFont.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
