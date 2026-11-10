
import React, { useEffect, useState } from "react";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import {
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "./firebase";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();

  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        color: "#7055e8"
      }}>
        Loading Whispo...
      </div>
    );
  }

  return (

    <Routes>

      <Route
        path="/"
        element={
          <Navigate to={user ? "/home" : "/register"} />
        }
      />

      <Route
        path="/register"
        element={
          user
            ? <Navigate to="/home" />
            : <Registration />
        }
      />

      <Route
        path="/login"
        element={
          user
            ? <Navigate to="/home" />
            : <Login />
        }
      />

      <Route
        path="/home"
        element={
          user
            ? <Home />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="*"
        element={
          <Navigate to={user ? "/home" : "/login"} />
        }
      />

    </Routes>

  );
}

export default App;
