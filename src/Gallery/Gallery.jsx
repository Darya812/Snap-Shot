import React from "react";
import { ContainerImg } from "./ContainerImg/ContainerImg";
import styles from "./Gallery.module.css";

const addPicture = (linkImg) => {
  return linkImg.map((link) => {
    const linkImg = link.urls.small;
    return <ContainerImg linkImg={linkImg} key={link.id} />;
  });
};

export const Gallery = ({ linkImg }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.allPicture}>{addPicture(linkImg)}</div>
    </div>
  );
};
