import styles from "./App.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const isHomePage = useLocation().pathname === "/";
  return (
    <>
      <div className={styles.App}>
        <nav className={styles.navBar}>
          <Link to="/login">Login</Link>
          {<Link to="/">Home</Link>}
        </nav>
        <Outlet />
        {isHomePage && <h1>BEM VINDO AO SEU DASHBOARD INFFEL ONBOARD!!</h1>}
      </div>
    </>
  );
}

export default App;
