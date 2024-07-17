import React, { useEffect, useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ token, setToken }) => {
  const navigate = useNavigate()
  
  const [profile, setProfile] = useState(
    token || localStorage.getItem("localStorageToken"))
  
  const decodedToken = profile && jwtDecode(profile);
  
  const { name, email, picture } = decodedToken || {}
  
  
   useEffect(() => {
     if (!profile) {
       navigate("/"); // Redirect to home if no user is found
     }
   }, [profile, navigate]);
  
   const handleLogout = () => {
     localStorage.removeItem("localStorageToken"); // Remove user from localStorage
     setProfile(null); // Clear user state
     navigate("/"); // Redirect to home page
   };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      {decodedToken && (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <img src={picture} alt="Profile" />
        </div>
      )}
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
};

export default Dashboard;
