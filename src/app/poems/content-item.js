import React from "react";
import styles from "./poems.module.css"; // Import CSS module for styling

const SingleEntry = ({ title, onClick }) => {
  return (
    <div className={styles.entryContainer} onClick={onClick}>
      <h2 className={styles.entryTitle}>{title}</h2>
    </div>
  );
};

export default SingleEntry;
