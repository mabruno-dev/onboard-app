import React, { useState } from "react";
import styles from "./LoginBox.module.css";

function LoginBox({ show }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await fetch("https://inffel.sytes.net/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Login successful, you can handle the response accordingly
        const data = await response.json();
        localStorage.setItem("loginToken", data.accessToken);
      } else {
        // Handle login error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };
  return (
    <>
      <div className={styles.boxContent}>
        <h1>LOGIN</h1>
        <label>
          <strong>Email:</strong>{" "}
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>
          <strong>Password:</strong>{" "}
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={login}>Acess Page</button>
      </div>
    </>
  );
}

export default LoginBox;
