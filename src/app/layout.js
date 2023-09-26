import "./globals.css";
import localFont from "next/font/local";

const monaSanzFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "swap",
});

export const metadata = {
  title: "Portafolio de Cathy",
  description:
    " Porrtafolio personal donde muestro mis proyectos y mis habilidades",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={monaSanzFont.className}>
      <body>{children}</body>
    </html>
  );
}
