import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.querySelector("#root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
