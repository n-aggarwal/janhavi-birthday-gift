import React from "react";
import styles from "./movie-reviews.module.css"; // Import CSS module for styling

const SingleEntry = ({ entry, onClick }) => {
  return (
    <div className={styles.entryContainer} onClick={onClick}>
      <h2 className={styles.entryTitle}>{entry.title}</h2>
      <h2 className={styles.entryMovie}>Movie: {entry.movie}</h2>
      <h2 className={styles.entryDate}>Date: {entry.date}</h2>
    </div>
  );
};

export default SingleEntry;
