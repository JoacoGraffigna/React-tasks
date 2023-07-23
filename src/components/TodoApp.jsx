import { useState } from "react";
import { Todo } from "./todo";
import "./app.css";

export function TodoApp() {
  const [title, settitle] = useState("");
  const [tareas, settareas] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    settitle(value);
  }

  function handleSubmit(i) {
    i.preventDefault();

    const nuevaTarea = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const temp = [...tareas];
    temp.unshift(nuevaTarea);

    settareas(temp);
    settitle("");
  }

  function handleUpate(id, value) {
    const temp = [...tareas];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    settareas(temp);
  }

  function handleDelete(id) {
    const temp = tareas.filter((item) => item.id !== id);
    settareas(temp);
  }

  return (
    <div className="TodoAppContainer">
      <h3 className="titulo">Task Creator</h3>
      <form onSubmit={handleSubmit} className="TodoAppForm">
        <input onChange={handleChange} className="TodoInput" value={title} />
        <input
          onClick={handleSubmit}
          className="TodoAppBoton"
          type="submit"
          value={"create"}
        />
      </form>

      <div className="TodoAppsContainer">
        {tareas.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
