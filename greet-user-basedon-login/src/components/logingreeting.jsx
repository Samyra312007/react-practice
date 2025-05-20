import React, {useState} from "react";
import "./logingreeting.css";

const Logingreeting = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <div className="text">{login ? <h1>Welcome!, Sahil</h1> : <h1>Please Login</h1>}</div>
      <button className="btn" onClick ={() => setLogin(!login)}>{login ? "Logout" : "Login"}</button>
    </>
  );
};

export default Logingreeting;
