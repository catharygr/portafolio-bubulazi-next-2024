import Hero from "./componentes/Hero";
import styles from "./page.module.css";
import EmojiCaty from "@/app/assets/imagen/generales/caty-emoji.png";

export default function Home() {
  return (
    <main>
      <Hero
        image={EmojiCaty}
        type="con-imagen"
        about="Proyecto:"
        title="Cathy, desarrolladora FrontEnd y algo más..."
        alt="Mi emoji frente de un ordenador"
      />
    </main>
  );
}
