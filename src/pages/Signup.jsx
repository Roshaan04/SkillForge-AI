import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account Created Successfully!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#4f46e5,#7c3aed,#ec4899)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "rgba(255,255,255,.15)",
          backdropFilter: "blur(12px)",
          padding: "40px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <h1>Create Account</h1>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleSignup}
          style={buttonStyle}
        >
          Sign Up
        </button>

        <p style={{ marginTop: 20 }}>
          Already have an account?

          <Link
            to="/login"
            style={{ color: "white", marginLeft: 10 }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "25px",
  border: "none",
  borderRadius: "10px",
  background: "white",
  color: "#4f46e5",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Signup;