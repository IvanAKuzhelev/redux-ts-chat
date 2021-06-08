import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment, addAmount } from "./features/counter/counterSlice";

const App = () => {
  // const [counter, setCounter] = useState(0);
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(addAmount(8));
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default App;
