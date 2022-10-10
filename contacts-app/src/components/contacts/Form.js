import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
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
