import React from "react";
import "./greeting.css";

const Greeting = (props) => {
  const now = new Date().getHours();
  let greet;
  if (now < 12) greet = "Good Morning";
  else if (now >= 12 && now < 18) greet = "Good Evening";
  else greet = "Good Night";
  return (
    <div className="greeting">
      <h1>
        {greet}, {props.name}!
      </h1>
    </div>
  );
};

export default Greeting;
