import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addcontact, addcontacts } from "../../redux/contactSlice";

function Form() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return false;

    const names = name.split(",");
    const data = names.map((name) => ({ id: nanoid(), name }));

    dispatch(addcontacts(data));

    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
