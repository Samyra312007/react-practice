import React, { useState } from "react";
import "./colorbox.css";


const Colorbox = () => {
    const [inputcolor, setinput] = useState("");
    const [color, setcolor] = useState("white");
    const applycolor = () => {
      setcolor(inputcolor);
    };
  return (
    <>
      <input type="text" placeholder="Enter a color name" value={inputcolor} onChange={(e) => setinput(e.target.value)}/>
      <div className="color-box" style={{ backgroundColor: color}}></div>
      <button onClick={applycolor} className="applycolor">Apply Color</button>
    </>
  );
};

export default Colorbox;
