import React from "react";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";

function Dashboard() {
  function Logout() {
    localStorage.removeItem("loginToken");
  }

  return (
    <>
      <div className={styles.body}>
        <h1>
          <strong>DASHBOARD</strong>
        </h1>
        <Link to="/login">
          <button onClick={Logout}>Logout</button>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
