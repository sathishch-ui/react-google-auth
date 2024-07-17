
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleAuthComponent = ({ setToken }) => {
    const navigate = useNavigate()
  const onSuccess = (response) => {
      console.log("Login success:", response);
      setToken(response.credential);
      localStorage.setItem("localStorageToken", response.credential);
      navigate('/dashboard')
  };

  const onFailure = (error) => {
    console.error("Login failure:", error);
  };

    return (
      <div style={{ display:'flex', justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <GoogleLogin
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Login with Google"
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
};

export default GoogleAuthComponent;
