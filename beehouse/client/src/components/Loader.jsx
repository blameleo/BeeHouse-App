import React from "react";
import { Audio } from "react-loader-spinner";

export default function Loader({ loaderStyle }) {
  console.log(loaderStyle);
  return (
    <div className={`${loaderStyle}`}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="git "
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
