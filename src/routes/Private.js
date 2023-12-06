import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = localStorage.getItem("loginToken");
        const response = await fetch(
          "https://inffel.sytes.net/auth/infoUsuario",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "id-usuario": 2,
              "id-sistema": 1,
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          setUser(true);
        } else {
          setUser(false);
        }
      } catch (error) {
        console.error("Error during token validation", error);
      }
    };

    validateToken();
  }, []);

  if (user === null) {
    return null;
  }

  return user ? children : <Navigate to="/login" />;
}
