import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleLogin} className="bg-primary p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-accent mb-6 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          required
        />
        <button type="submit" className="w-full bg-secondary text-primary p-3 rounded font-bold hover:bg-accent transition">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
