import React from "react";
import styles from "./diary-entry.module.css"; // Import CSS module for styling

const FullEntry = ({ entry, entryPage, setEntryPage, onBack }) => {
  const wordsPerPage = 85;
  const words = entry.text.split(" ");
  const totalPages = Math.ceil(words.length / (wordsPerPage * 2));
  const leftText = words
    .slice(
      entryPage * wordsPerPage * 2,
      entryPage * wordsPerPage * 2 + wordsPerPage
    )
    .join(" ");
  const rightText = words
    .slice(
      entryPage * wordsPerPage * 2 + wordsPerPage,
      (entryPage + 1) * wordsPerPage * 2
    )
    .join(" ");

  return (
    <>
      {
        <>
          <div className={`${styles.half} ${styles.left}`}>
            {entryPage == 0 && (
              <>
                <h1 className={styles.displayTitle}>{entry.title}</h1>
                <p className={styles.displayDate}>{entry.date}</p>
              </>
            )}
            <p className={styles.displayContent}>{leftText}</p>
          </div>
          <div className={`${styles.half} ${styles.right}`}>
            <p className={styles.displayContent}>{rightText}</p>
          </div>
        </>
      }
      <div className={styles.pagination}>
        {entryPage > 0 && (
          <button
            className={`${styles.pageButton} ${styles.backButton}`}
            onClick={() => setEntryPage(entryPage - 1)}
          >
            &#8592;
          </button>
        )}
        {entryPage < totalPages - 1 && (
          <button
            className={`${styles.pageButton} ${styles.nextButton}`}
            onClick={() => setEntryPage(entryPage + 1)}
          >
            &#8594;
          </button>
        )}
      </div>
    </>
  );
};

export default FullEntry;
