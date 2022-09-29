import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "../redux/todos/todosSlice";
function Form() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      title.length > 3
        ? dispatch(addTodo({ id: nanoid(), title, complated: false }))
        : console.log("hata");
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default Form;
