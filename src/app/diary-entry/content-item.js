import React from "react";
import styles from "./diary-entry.module.css"; // Import CSS module for styling

const SingleEntry = ({ title, date, onClick }) => {
  return (
    <div className={styles.entryContainer} onClick={onClick}>
      <h2 className={styles.entryTitle}>{title}</h2>
      <p className={styles.entryDate}>{date}</p>
    </div>
  );
};

export default SingleEntry;
