import React from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer.jsx";
import UserList from "./components/UserList.jsx";
import WindowSize from "./components/WindowSize.jsx";

function App() {
  return (
    <div>
      <CountdownTimer></CountdownTimer>
      <UserList></UserList>
      <WindowSize></WindowSize>
    </div>
  );
}

export default App;
