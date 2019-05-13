import React from "react";

const Explanation = ({ from, fromValue, to, toValue }) => {
  if (from === "HUF") {
    return (
      <p>
        {fromValue} {from} = {toValue} {to}
      </p>
    );
  } else if (to === "HUF") {
    return (
      <p>
        1 {from} = {fromValue} {to}{" "}
      </p>
    );
  }
  return (
    <p>
      1 {from} = {fromValue} HUF | 1 {to} = {toValue} HUF
    </p>
  );
};

export default Explanation;
