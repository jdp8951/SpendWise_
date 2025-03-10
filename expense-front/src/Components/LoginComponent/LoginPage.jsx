import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../LoginView.css";
import { validateUser } from "../../Services/LoginService";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const checkLogin = (e) => {
    e.preventDefault();
    validateUser(username, password).then((response) => {
      let category = String(response.data);
      alert(category);
      if (category === "Admin") navigate("/AdminMenu");
      else if (category === "Customer") navigate("/CustomerMenu");
      else alert("Wrong Username/Password");
    });
  };

  const registerNewUser = () => {
    navigate("/Register");
  };

  return (
    <div
      className="login-container d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1654455543369-d88e980c5811?w=1600&auto=format&fit=crop&q=80')", // Same dark blue wallpaper
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(8px)",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      {/* Glassmorphism Login Box */}
      <div
        className="card shadow-lg p-4 rounded"
        style={{
          width: "450px",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent effect
          backdropFilter: "blur(10px)", // Glass effect
          border: "2px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "15px",
          color: "#FFFFFF",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)", // Subtle neon glow
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        <h2
          className="text-center mb-3"
          style={{ textShadow: "0 0 10px #FFFFFF", color: "#FFFFFF" }}
        >
          <u>Login</u>
        </h2>
        <form method="post">
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              className="form-control bg-transparent text-white border-light"
              style={{ backdropFilter: "blur(5px)", color: "#fff" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="form-control bg-transparent text-white border-light"
              style={{ backdropFilter: "blur(5px)", color: "#fff" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-light w-100 rounded-pill mb-3"
              style={{
                textShadow: "0 0 5px #000",
                color: "#000",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={(e) => checkLogin(e)}
              onMouseOver={(e) => (e.target.style.boxShadow = "0 0 15px #FFF")}
              onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <button
            className="btn btn-outline-light w-100 rounded-pill"
            style={{
              transition: "all 0.3s ease-in-out",
            }}
            onClick={registerNewUser}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.5)")
            }
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
          >
            Register New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
