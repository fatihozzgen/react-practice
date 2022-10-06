import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <>
      <Link to={`/quotes/${item.quote_id}`}>
        <q>{item.quote}</q>
      </Link>
      <strong>{item.author}</strong>
    </>
  );
}

export default Item;
