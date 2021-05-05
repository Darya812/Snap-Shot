import React from "react";
import { ContainerImg } from "../ContainerImg/ContainerImg";
import styles from "./Gallery.module.css";

export const Gallery = ({ arrayLinks }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.allPicture}>
        {arrayLinks.map((links) => {
          const link = links.urls.small;
          return <ContainerImg link={link} key={links.id} />;
        })}
      </div>
    </div>
  );
};
