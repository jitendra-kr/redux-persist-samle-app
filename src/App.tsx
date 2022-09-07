import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./common/hooks";
import { decrement, increment } from "./common/store/counterSlice";
import type { RootState } from "./common";

function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state: RootState) => state.counter.value)


  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement());

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button>DEC</button> {count}
          <button style={{marginLeft: "5px"}} onClick={inc} >INC</button>
        </div>
      </header>
    </div>
  );
}

export default App;
