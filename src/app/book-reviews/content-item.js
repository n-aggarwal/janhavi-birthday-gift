import React from "react";
import styles from "./book-reviews.module.css"; // Import CSS module for styling

const SingleEntry = ({ title, bookTitle, author, onClick }) => {
  return (
    <div className={styles.entryContainer} onClick={onClick}>
      <h3 className={styles.entryTitle}>Book: {bookTitle}</h3>
      <h3 className={styles.entryAuthor}>Author: {author}</h3>
      <h2 className={styles.entryDesc}>{title}</h2>
    </div>
  );
};

export default SingleEntry;
