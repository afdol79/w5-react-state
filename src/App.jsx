import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [msg, setMsg] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState();

  function saveTodo() {
    setTodo([...todo, msg]);
    setMsg("");
  }

  const delTodo = (index) => {
    setTodo(todo.filter((e, i) => i !== index));
  };

  const editTodo = (index) => {
    setMsg(todo[index]);
    setEditMode(true);
    setEditId(index);
  };

  const saveEditTodo = () => {
    setTodo(todo.map((e, i) => (i == editId ? msg : e)));
    setEditMode(false);
    setMsg("");
  };

  return (
    <div>
      <input type="text" onChange={(e) => setMsg(e.target.value)} value={msg} />
      {!editMode ? (
        <button onClick={saveTodo}>Save</button>
      ) : (
        <button onClick={saveEditTodo}>edit save</button>
      )}
      <br />
      {todo.map((e, i) => {
        return (
          <li>
            {e}
            <button onClick={() => editTodo(i)}>แก้ไข</button>
            <button onClick={() => delTodo(i)}>ลบ</button>
          </li>
        );
      })}
    </div>
  );
}

export default App;
