import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const DATA = [
  {
    name: "Eat",
    completed: true,
    id: "todo-0",
  },
  {
    name: "Sleep",
    completed: false,
    id: "todo-1",
  },
  {
    name: "Repeat",
    completed: false,
    id: "todo-2",
  },
  {
    name: "Work",
    completed: false,
    id: "todo-3",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
);
