import React from "react";
import styles from "./book-reviews.module.css"; // Import CSS module for styling

const SingleEntry = ({ title, bookTitleAuthor, onClick }) => {
  return (
    <div className={styles.entryContainer} onClick={onClick}>
      <h2 className={styles.entryTitle}>{title}</h2>
      <p className={styles.entryDate}>{bookTitleAuthor}</p>
    </div>
  );
};

export default SingleEntry;
