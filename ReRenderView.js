// 6. How to re-render the view when the browser is resized?

/**
 * re-rendering a react component on window resizing has a 3 steps
 * 1. create state variables for window width and height
 * 2. create a function to assign window dimensions to the width and height variables
 * 3. call the assignement function inside on useEffect hooks
 */

//example

import React, { useState, useEffect } from "react";

const App = () => {
  // 1st step
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // 2nd step
  const setDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // 3rd step
  useEffect(() => {
    window.addEventListener("resize", setDimensions);
    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  }, []);

  return (
    <div>
      The new dimensions are : width = {width} and height = {height}
    </div>
  );
};
