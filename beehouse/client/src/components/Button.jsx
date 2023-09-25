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
  signinStyle
}) {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          name === "sign up with google"
            ? googleLoginStyle
            : name === "Join"
            ? joinStyle
            : name === "login"
            ? loginStyle
            : name === "Sign in with google"
            ? googleLoginStyle
            : name === "Sign in"
            ? signinStyle
            : style
          
        }
      >
        {name === "Sign in with google" && <FcGoogle className="mr-3" />}
        {name}
      </button>
    </div>
  );
}

export default Button;
