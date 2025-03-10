import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../LoginView.css";
import { registerNewUser } from "../../Services/LoginService";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterUser = () => {
  const [expenseUser, setExpenseUser] = useState({
    username: "",
    password: "",
    email: "",
    category: "",
  });

  const [password2, setPassword2] = useState("");
  let navigate = useNavigate();

  const saveNewUser = (event) => {
    event.preventDefault();
    if (expenseUser.password.length < 5 || expenseUser.password.length > 10) {
      alert("Password must be between 5 to 10 characters long");
      return;
    }
    if (expenseUser.password === password2) {
      registerNewUser(expenseUser).then((response) => {
        alert("User is registered successfully...Go For Login");
        navigate("/");
      });
    } else {
      alert("Passwords are not matched");
      return;
    }
  };

  const onChangeHandler = (event) => {
    event.persist();
    const { name, value } = event.target;
    setExpenseUser((values) => ({ ...values, [name]: value }));
  };

  return (
    <div
      className="register-container d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1654455543369-d88e980c5811?w=1600&auto=format&fit=crop&q=80')", // Your provided image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(8px)",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      {/* Glassmorphism Form */}
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
          <u>User Registration</u>
        </h2>
        <form method="post">
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              className="form-control bg-transparent text-white border-light"
              style={{
                backdropFilter: "blur(5px)",
              }}
              value={expenseUser.username}
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="form-control bg-transparent text-white border-light"
              style={{
                backdropFilter: "blur(5px)",
              }}
              value={expenseUser.password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="password2"
              className="form-control bg-transparent text-white border-light"
              style={{
                backdropFilter: "blur(5px)",
              }}
              value={password2}
              onChange={(event) => setPassword2(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="form-control bg-transparent text-white border-light"
              style={{
                backdropFilter: "blur(5px)",
              }}
              value={expenseUser.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Select Category:</label>
            <input
              list="types"
              name="category"
              placeholder="Select your category"
              className="form-control bg-transparent text-white border-light"
              style={{
                backdropFilter: "blur(5px)",
              }}
              value={expenseUser.category}
              onChange={onChangeHandler}
            />
            <datalist id="types">
              <option value="User" />
              <option value="Admin" />
            </datalist>
          </div>
          <div className="text-center">
            <button
              className="btn btn-light w-100 rounded-pill"
              style={{
                textShadow: "0 0 5px #000",
                color: "#000",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={saveNewUser}
              onMouseOver={(e) => (e.target.style.boxShadow = "0 0 15px #FFF")}
              onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
