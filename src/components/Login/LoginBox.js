import React, { useEffect, useState } from "react";
import styles from "./LoginBox.module.css";
import { useNavigate } from "react-router-dom";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (loginSuccess) {
      navigate("/dashboard");
    }
  }, [loginSuccess, navigate]);

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
        setLoginSuccess(true);
        console.log(data.accessToken);
      } else {
        // Handle login error
        console.error("Login failed");
        setLoginSuccess(false);
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
          className={styles.input}
          type="text"
          value={email}
          placeholder="user@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>
          <strong>Password:</strong>{" "}
        </label>
        <input
          className={styles.input}
          type="password"
          value={password}
          placeholder="string"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className={styles.button} onClick={login}>
          Access Page
        </button>
      </div>
    </>
  );
}

export default LoginBox;
