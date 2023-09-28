import React from "react";
import { FcGoogle } from "react-icons/fc";

function Button({
  children,
  style,
  signUpLoginStyle,
  name,
  joinStyle,
  loginStyle,
  googleLoginStyle,
  onClick,
}) {
  return (
    <div>
      <button onClick={onClick} className={joinStyle}>
        {name}
      </button>
    </div>
  );
}

export default Button;
