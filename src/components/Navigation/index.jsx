import React from "react";
import { ButtonOfmenu } from "../ButtonOfMenu";
import styles from "./Navigation.module.css";
const arrayButton = ["mountain", "beaches", "birds", "food"];

export const Navigation = ({ setRequest }) => {
  return (
    <div className={styles.listNav}>
      {arrayButton.map((value) => {
        return <ButtonOfmenu value={value} setRequest={setRequest} key={value}/>;
      })}
    </div>
  );
};
