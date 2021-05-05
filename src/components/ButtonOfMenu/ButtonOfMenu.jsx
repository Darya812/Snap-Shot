import React from "react";
import styles from "./ButtonOfMenu.module.css";

export const ButtonOfmenu = ({ setRequest, value }) => {
  return (
    <button onClick={() => setRequest(value)} className={styles.navLink}>
     {value}
    </button>
  );
};
