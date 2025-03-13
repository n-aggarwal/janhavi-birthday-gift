import React from "react";
import styles from "./diary-entry.module.css"; // Import CSS module for styling

const SingleEntry = ({ title, date }) => {
  return (
    <div className={styles.entryContainer}>
      <h2 className={styles.entryTitle}>{title}</h2>
      <p className={styles.entryDate}>{date}</p>
    </div>
  );
};

export default SingleEntry;
