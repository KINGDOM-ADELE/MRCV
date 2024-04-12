import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isAdminPage = location.pathname === "/admin";

  return (
    <header>
      <h1>My App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          {isAdminPage && <li><Link to="/admin">Admin</Link></li>}
          {isAdminPage && <li><Link to="/">Logout</Link></li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
