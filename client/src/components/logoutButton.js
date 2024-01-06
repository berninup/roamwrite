import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogoutButton({ setIsLoggedIn }) {
  const url = "http://localhost:3000/users/logout";
  const navigate = useNavigate();
  
  

  const handleLogout = () => {
    axios
      .get(url, { withCredentials: true })
      .then((response) => {
        console.log(response);
        setIsLoggedIn(false)
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed: ", error);
      });
  };
  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
