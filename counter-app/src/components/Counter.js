import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(5);
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{counterValue}</div>
      <button onClick={() => dispatch(decreament())}>Decreament</button>
      <button onClick={() => dispatch(increament())}>Increament</button>

      <br />
      <br />
      <input type="number" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => dispatch(increamentByAmount(amount))}>
        İncreament by Amount
      </button>
    </>
  );
}

export default Counter;
