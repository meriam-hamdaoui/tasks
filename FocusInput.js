//  7. How to focus an input element on page load?
// To do this we need two hook's functions useRef and useEffect
// useRef used to refer to a specific input
// useEffect used to keep focus on the specific input on page loading

import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form>
      <input type="text" placeholder="Enter e-mail" ref={inputRef} />
      <input type="password" placeholder="Enter password" />
      <input type="submit" />
    </form>
  );
}

export default App;
