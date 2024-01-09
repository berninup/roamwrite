import React from "react";
import LogoutButton from "./logoutButton";

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://i.imgur.com/dR1yJM8.png" width="65" />
          <strong>RoamWrite</strong>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
          <LogoutButton setIsLoggedIn={setIsLoggedIn} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
