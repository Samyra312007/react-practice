import React, { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa"; 

const Inputbox = () => {
  const inputref = useRef(null);
  const [text, settext] = useState([]);

  useEffect(() => {
    inputref.current.focus();
  });

  const addtodo = () => {
    const newtext = inputref.current.value.trim();
    if (newtext === "") return;
    settext([...text, newtext]);
    inputref.current.value = "";
  };

  const deletetodo = (indextodelete) => {
    const updatedtext = text.filter((_, index) => index !== indextodelete);
    settext(updatedtext);
  }

  return (
    <>
      <input
        className="fixed top-25 left-115 px-7 py-4 text-lg w-lg rounded-lg bg-black text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all focus:shadow-[0_0_12px_rgba(0,191,255,0.1)"
        ref={inputref}
        type="text"
        placeholder="Type Here..."
      />
      <button onClick={addtodo} className="fixed top-1/7 left-2/3 px-6 py-3">
        Add
      </button>
      <div className="flex justify-center ">
        <ul className="w-[635px] h-[450px] mt-20 p-4 bg-slate-950 text-white text-lg rounded-lg overflow-auto shadow-md">
          {text.map((texts, index) => (
            <div className="flex justify-between box-content px-4 py-2 text-white bg-violet-700 rounded-lg align-center text-center font-bold my-4">
              <li key={index}>{texts}</li>
              <button className="bg-violet-700 rounded-lg mx-1" onClick= {() => deletetodo(index)}><FaTrash/></button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Inputbox;
