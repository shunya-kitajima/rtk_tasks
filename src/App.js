import React from "react";
import { FaSignInAlt } from "react-icons/fa";

import styles from "./App.module.css";

function App() {
  const Logout = () => {
    localStorage.removeItem("localJWT");
    window.location.href = "/";
  };

  return (
    <div className={styles.containerTasks}>
      <div className={styles.appTasks}>
        <button onClick={Logout} className={styles.signBtn}>
          <FaSignInAlt />
        </button>
      </div>
      <div className={styles.appDetails}></div>
    </div>
  );
}

export default App;
