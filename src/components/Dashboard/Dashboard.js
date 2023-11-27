import React from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  function Logout() {
    sessionStorage.clear();
    localStorage.clear();
  }

  return (
    <>
      <div className={styles.body}>
        <h1>
          <strong>DASHBOARD</strong>
        </h1>
        <button onClick={Logout}>Logout</button>
      </div>
    </>
  );
}

export default Dashboard;
