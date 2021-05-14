import React from "react";
import styles from "./ContainerImg.module.css";

export const ContainerImg = ({ link }) => {
  return (
    <div className={styles.imgContainer}>
      <img src={link} alt="pic"/>
    </div>
  );
};
