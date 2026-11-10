
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful!");

      // App.jsx will redirect to Home.

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div style={{
      minHeight: "100vh",
      background: "#f5f6fc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "Arial"
    }}>

      <div style={{
        width: "100%",
        maxWidth: "420px",
        background: "white",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 8px 35px rgba(0,0,0,0.06)",
        boxSizing: "border-box"
      }}>

        <h2 style={{
          textAlign: "center",
          color: "#7055e8",
          fontSize: "28px"
        }}>
          Whispo
        </h2>

        <h1 style={{ textAlign: "center" }}>
          Welcome Back
        </h1>

        <p style={{
          textAlign: "center",
          color: "#888",
          marginBottom: "30px"
        }}>
          Login to continue chatting.
        </p>

        <form onSubmit={handleSubmit}>

          <label style={{ fontWeight: "bold" }}>
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "13px",
              marginTop: "8px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "9px",
              boxSizing: "border-box"
            }}
          />

          <label style={{ fontWeight: "bold" }}>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "13px",
              marginTop: "8px",
              marginBottom: "22px",
              border: "1px solid #ddd",
              borderRadius: "9px",
              boxSizing: "border-box"
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: "#7055e8",
              color: "white",
              border: "none",
              borderRadius: "9px",
              fontWeight: "bold",
              cursor: "pointer",
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p style={{
          textAlign: "center",
          marginTop: "22px",
          color: "#777"
        }}>
          Don't have an account?

          <Link to="/register" style={{
            color: "#7055e8",
            textDecoration: "none",
            fontWeight: "bold",
            marginLeft: "5px"
          }}>
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
