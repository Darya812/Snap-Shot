import React from "react";
import styles from "./ContainerImg.module.css";

export const ContainerImg = ({ linkImg }) => {
  return (
    <div className={styles.imgContainer}>
      <img src={linkImg} alt="pic"></img>
    </div>
  );
};
