import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counter";
import { RootState } from "./redux/state/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h4>Count: {count}</h4>
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
    </div>
  );
}

export default App;
