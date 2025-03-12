"use client";

import React, { useState } from "react";
import styles from "./diary-entry.module.css"; // Import the CSS Module

const Diary = () => {
  const [imageChanged, setImageChanged] = useState(false);

  const handleClick = () => {
    setImageChanged(true); // Change the image
  };

  return (
    <div
      className={styles.diaryContainer} // Add a container div
    >
      <div
        className={styles.diary}
        style={{
          backgroundImage: imageChanged
            ? 'url("/open-diary.jpg")'
            : 'url("/diary-cover.jpeg")',
          width: imageChanged ? "max(1000px, 60vw)" : "max(500px, 30vw)", // Double the width when image changes
          minWidth: imageChanged ? "1000px" : "500px", // Adjust the min-width when the image changes
        }}
        onClick={handleClick}
      >
        {" "}
        <div className={`${styles.half} ${styles.left}`}>
          {imageChanged && <h1 className={styles.contentsHeading}>Contents</h1>}
        </div>
        <div className={`${styles.half} ${styles.right}`} />
      </div>
    </div>
  );
};

export default Diary;
