// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav
      style={{
        backgroundColor: "#232f3e",
        color: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Shopping Applications Created by pragathi
      </Link>
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        🛒 Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;
