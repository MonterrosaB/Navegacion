import React, { useState } from "react";

function Calculadora() {
  const [resultado, setResultado] = useState("");

  const agregarValor = (valor) => {
    setResultado(resultado + valor);
  };

  const limpiar = () => {
    setResultado("");
  };

  const calcular = () => {
    try {
      setResultado(eval(resultado).toString());
    } catch {
      alert("Error en la operación");
    }
  };

  return (
    <div className="calculadora">
      <input type="text" value={resultado} readOnly />
      <div className="botones">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "="].map((btn) => (
          <button
            key={btn}
            onClick={btn === "=" ? calcular : () => agregarValor(btn)}
          >
            {btn}
          </button>
        ))}
        <button onClick={() => agregarValor("+")}>+</button>
        <button onClick={limpiar}>C</button>
      </div>
    </div>
  );
}

export default Calculadora;
