import React from "react";

function useToggle(initialValue = false) {
  if (typeof initialValue !== "boolean") {
    console.log("Invalid type for useToggle");
  }

  const [value, setValue] = React.useState(initialValue);

  const toggleValue = React.useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
}

export default useToggle;

// El custom hook le paso un argumento que el valor inicial que es false por defecto. con esto me aseguro de que el valor inicial proporcionado es un booleano. Si no es así, se registra un mensaje de error en la consola. Luego utilizo el useState  para crear un estado inicializandolo con initialValue. Utilizo el hook useCallback para crear una función toggleValue que, cuando se llama, alterna el valor de value entre true y false y se retorna un array que contiene el valor actual y la función para alternar ese valor.
