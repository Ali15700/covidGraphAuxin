import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import users from "../../data/userData.json";
const Login = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // it will check valid user from userData json file 
    const isValidUser = users.some((user) => user.username === username && user.password === password);
    if (isValidUser) {
        alert('Now you will direct to graph');
        setIsLoggedIn(true);
        navigate("/graph");
    } else {
      alert("Invalid username or password");
        setUsername("");
        setPassword("");
    }
  };

  return (
    <div className="login">
      <h1>AUXIN SECURITY LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};



export default Login;
