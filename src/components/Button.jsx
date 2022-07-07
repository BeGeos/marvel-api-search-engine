import React from "react";

export default function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}
