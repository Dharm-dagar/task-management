import React from "react";
import { useState, useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth"; // ✅ FIXED: Import directly from firebase/auth
import { Button } from "@mui/material";


const Header = ({ user, setUser }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login Error: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Task Manager</h1>
      {user ? (
        <div className="flex items-center gap-4">
          <img src="/dharm.jpg" alt="User" className="w-10 h-10 rounded-full" />
          <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Button variant="contained" color="primary" onClick={handleLogin}>Login with Google</Button>
      )}
    </div>
  );
};

export default Header;

