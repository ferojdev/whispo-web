
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

import { auth } from "../firebase";

function Registration() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

      await updateProfile(userCredential.user, {
        displayName: form.name
      });

      alert("Registration Successful!");

      // Firebase automatically signs in the new user.
      // App.jsx will redirect the user to Home.

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "13px",
    marginTop: "8px",
    border: "1px solid #ddd",
    borderRadius: "9px",
    boxSizing: "border-box",
    outline: "none",
    fontSize: "14px"
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
          Create Account
        </h1>

        <p style={{
          textAlign: "center",
          color: "#888",
          marginBottom: "25px"
        }}>
          Join Whispo and start chatting.
        </p>

        <form onSubmit={handleSubmit}>

          {[
            { name: "name", label: "Full Name", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
            { name: "password", label: "Password", type: "password" },
            {
              name: "confirmPassword",
              label: "Confirm Password",
              type: "password"
            }
          ].map((field) => (

            <div key={field.name} style={{
              marginBottom: "18px"
            }}>

              <label style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "14px"
              }}>
                {field.label}
              </label>

              <input
                style={inputStyle}
                type={field.type}
                name={field.name}
                placeholder={`Enter ${field.label}`}
                value={form[field.name]}
                onChange={handleChange}
                required
                minLength={
                  field.type === "password" ? 6 : undefined
                }
              />

            </div>

          ))}

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
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p style={{
          textAlign: "center",
          marginTop: "22px",
          color: "#777"
        }}>
          Already have an account?

          <Link to="/login" style={{
            color: "#7055e8",
            textDecoration: "none",
            fontWeight: "bold",
            marginLeft: "5px"
          }}>
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Registration;
