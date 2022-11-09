// 5.	What is strict mode in React? Give an example.
/**
 * the react strict mode is a tool that focus attention
 * on potential issues in a programme
 * it works when we wrap our App component by the React.StrictMode compenent
 */

/************** example */
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const App = () => <div>Hello World!!</div>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
