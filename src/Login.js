import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {

    if (email && password) {

      localStorage.setItem("user", email);

      navigate("/dashboard");

    } else {
      alert("Enter details");
    }

  };

  return (

    <div>

      <h2>ERP Login</h2>

      <input placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)} />

      <input type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={login}>Login</button>

    </div>

  );
}

export default Login;