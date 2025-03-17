import React from "react";
import styles from "./poems.module.css"; // Import CSS module for styling

const FullEntry = ({ entry, onBack }) => {
  return (
    <>
      <h1 className={styles.displayTitle}>{entry.title}</h1>
      <h3 className={styles.displayAuthor}>Janhavi Munde</h3>
      <p className={styles.displayContent}>
        {" "}
        {entry.poem.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </p>
    </>
  );
};

export default FullEntry;
