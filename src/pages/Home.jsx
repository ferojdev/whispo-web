
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Home() {

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

  return (

    <div style={{
      minHeight: "100vh",
      background: "#f5f6fc",
      fontFamily: "Arial"
    }}>

      <nav style={{
        background: "white",
        padding: "20px 7%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>

        <h2 style={{
          color: "#7055e8",
          margin: 0
        }}>
          Whispo
        </h2>

        <button
          onClick={handleLogout}
          style={{
            background: "#7055e8",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>

      </nav>

      <div style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>

        <h1 style={{
          fontSize: "35px",
          color: "#25213a"
        }}>
          Welcome to Whispo! 💜
        </h1>

        <h3 style={{
          color: "#7055e8",
          marginTop: "20px"
        }}>
          Hello, {auth.currentUser?.displayName || "User"}!
        </h3>

        <p style={{
          color: "#888",
          fontSize: "16px",
          marginTop: "15px"
        }}>
          Connect with people and start your conversations.
        </p>

        <button style={{
          background: "#7055e8",
          color: "white",
          border: "none",
          padding: "14px 30px",
          borderRadius: "9px",
          marginTop: "25px",
          cursor: "pointer"
        }}>
          Start Chatting
        </button>

      </div>

    </div>
  );
}

export default Home;
