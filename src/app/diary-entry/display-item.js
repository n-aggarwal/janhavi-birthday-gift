import React from "react";
import styles from "./diary-entry.module.css"; // Import CSS module for styling

const FullEntry = ({ entry, onBack }) => {
  return (
    <div className="fullEntry">
      <h1 className={styles.displayTitle}>{entry.title}</h1>
      <p className={styles.displayDate}>{entry.date}</p>
      <p className={styles.displayContent}>{entry.text}</p>
      <button className="backToContents" onClick={onBack}>
        Back to Contents
      </button>
    </div>
  );
};

export default FullEntry;
