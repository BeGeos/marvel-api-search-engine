import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ to, text }) {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
}
