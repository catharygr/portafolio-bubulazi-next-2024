const hiddenStyles = {
  display: "inline-block",
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

const VisuallyHidden = ({ children }) => {
  return <span style={hiddenStyles}>{children}</span>;
};

export default VisuallyHidden;

// Este componente oculta visualmente el contenido que se le pasa como children, pero permite que el contenido sea accesible para los lectores de pantalla. Con estos estilos lo hago invisible visualmente en la página, pero no lo eliminan del árbol de accesibilidad del documento. Aunque los usuarios no puedan ver el contenido, el lector de pantalla puede acceder a él y leerlo.
