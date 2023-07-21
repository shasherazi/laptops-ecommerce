import "../App.css";
import { increment } from "../redux/test/testSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { count } = useSelector((state) => state.test);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
