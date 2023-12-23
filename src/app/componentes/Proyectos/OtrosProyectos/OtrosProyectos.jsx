import styles from "./OtrosProyectos.module.css";

export default function OtrosProyectos({ content, id }) {
  for (let i = 0; i < 2; i++) {
    const ranDomNum = Math.floor(Math.random() * content.length);
    if(content[ranDomNum].id === id) {
      i--;
      
    console.log(ranDomNum);
  }
  return (
    <div>
      <h1>Otros proyectos</h1>
    </div>
  );
}
