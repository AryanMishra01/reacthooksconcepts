import React, { useEffect, useState } from "react";

const UseEffectCleanUpFuntion = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    setWidthCount(window.innerWidth);
    
  };

  useEffect(() => {
    console.log("add Event");
    window.addEventListener("resize", actualWidth);
    console.log (widthCount)
    // cleanup funtion in useEffect below:
    // why use: 
            //1. Server size problem/ crash
            //2. Memory leak
            //3. To remove it from the memory 
            // using it enables to store only the current data and its value      
    return () => {
      console.log("remove Event");
      window.removeEventListener("resize", actualWidth);
    };
  },); //dependency list

  //sample of complete useEffect 
//   useEffect(() => {
//       effect
//       return () => {
//           cleanup
//       };
//   }, [input]);

  return (
      
    // 1920 px , width of the window
    <>
      <h1>The actual size of the window is:</h1>
      <h1> {widthCount}</h1>
    </>

  );
};

export default UseEffectCleanUpFuntion;
