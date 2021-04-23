import React from "react";
import styles from "./Navigation.module.css";

export const Navigation = ({ setRequest }) => {
  return (
    <ul className={styles.listNav}>
      <li onClick={() => setRequest("mountain")} className={styles.navLink}>
        Mountain
      </li>
      <li onClick={() => setRequest("beaches")} className={styles.navLink}>
        Beaches
      </li>
      <li onClick={() => setRequest("birds")} className={styles.navLink}>
        Birds
      </li>
      <li onClick={() => setRequest("food")} className={styles.navLink}>
        Food
      </li>
    </ul>
  );
};
