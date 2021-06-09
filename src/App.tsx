import { useAppDispatch, useAppSelector } from "./app/hooks";
import MsgSection from "./components/MsgSection";
import { increment, addAmount } from "./features/counter/counterSlice";

const App = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(addAmount(8));
  return (
    <div className="container bg-blue-400 min-h-screen">
      <p>{counter}</p>
      <button onClick={handleClick}>add</button>
      <MsgSection />
    </div>
  );
};

export default App;
