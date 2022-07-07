import React from "react";

export default function Navbar({ logo, children }) {
  return (
    <header>
      <nav className="navbar">
        {logo}
        <ul>{children}</ul>
      </nav>
    </header>
  );
}
