import React, { useEffect, useState } from "react";
import styles from "./LoginBox.module.css";
import { useNavigate } from "react-router-dom";
import eyeCloseImage from "./icons/eye-close.png";
import eyeOpenImage from "./icons/eye-open.png";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [imgSrc, setImgSrc] = useState(eyeCloseImage);
  const [inputClass, setInputClass] = useState(styles.input);

  function imgClick() {
    setShowPassword(!showPassword);
    setImgSrc(showPassword ? eyeCloseImage : eyeOpenImage);
  }

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
      } else {
        // Handle login error
        setLoginSuccess(false);
        setInputClass(styles.invalid);
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };
  return (
    <>
      <div className={styles.boxContent}>
        <h1>LOGIN</h1>
        {/* <label>
          <strong>Email:</strong>{" "}
        </label> */}
        <input
          className={inputClass}
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {/* <label>
          <strong>Password:</strong>{" "}
        </label> */}
        <div className="ShowPassword">
          <input
            className={inputClass}
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={imgSrc}
            alt="eye-close"
            onClick={imgClick}
            oncli
            className={styles.showPasswordIcon}
          />
        </div>
        <br />
        <button className={styles.button} onClick={login}>
          Access Page
        </button>
      </div>
    </>
  );
}

export default LoginBox;
