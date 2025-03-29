import React, { useState } from "react";

function TodoList() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="todo-list">
      <h1>Lista de Tareas</h1>
      <div className="input-tarea">
        <input
        className="inputTodo"
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button onClick={agregarTarea} className="btnAgregar">Agregar</button>
      </div>
      <ul className="ulT">
        {tareas.map((t, index) => (
          <li key={index} className="liT">
            {t} <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
