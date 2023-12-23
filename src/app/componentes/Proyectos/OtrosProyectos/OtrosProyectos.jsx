import styles from "./OtrosProyectos.module.css";

export default function OtrosProyectos({ content, id }) {
  let primerProyecto = "";
  for (let i = 0; i < 2; i++) {
    const ranDomNum = Math.floor(Math.random() * content.length);
    if (content[ranDomNum].id === id) {
      i--;
      continue;
    }
    if (primerProyecto === content[ranDomNum].id) {
      i--;
      continue;
    }
    primerProyecto = content[ranDomNum].id;

    console.log(primerProyecto);
  }
  return (
    <div>
      <h1>Otros proyectos</h1>
    </div>
  );
}
