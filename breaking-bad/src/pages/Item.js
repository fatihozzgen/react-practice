import React from "react";

function Item({ item }) {
  return (
    <>
      <q>{item.quote}</q> <strong>{item.author}</strong>
    </>
  );
}

export default Item;
