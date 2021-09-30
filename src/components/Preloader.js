import React from "react";
import styles from "./Preloader.module.css"

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preload_content}></div>
    </div>
  );
};

export default Preloader;
