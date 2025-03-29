import React, { useState } from "react";

function RegistroEstudiantes() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [carnet, setCarnet] = useState("");
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = () => {
    if (nombre.trim() && edad.trim() && carnet.trim()) {
      const nuevoEstudiante = { nombre, edad, carnet };
      setEstudiantes([...estudiantes, nuevoEstudiante]);
      setNombre("");
      setEdad("");
      setCarnet("");
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  const eliminarEstudiante = (index) => {
    const nuevosEstudiantes = estudiantes.filter((_, i) => i !== index);
    setEstudiantes(nuevosEstudiantes);
  };

  return (
    <div className="registro-estudiantes">
      <h1>Registro de Estudiantes</h1>
      <div className="formulario">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <input
          type="text"
          placeholder="Carnet"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
        <button onClick={agregarEstudiante}>Agregar Estudiante</button>
      </div>
      <ul>
        {estudiantes.map((estudiante, index) => (
          <li key={index}>
            {estudiante.nombre} - {estudiante.edad} años - Carnet: {estudiante.carnet}
            <button onClick={() => eliminarEstudiante(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegistroEstudiantes;
