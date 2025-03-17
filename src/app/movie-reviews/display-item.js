import React from "react";
import styles from "./movie-reviews.module.css"; // Import CSS module for styling

const FullEntry = ({ entry, onBack }) => {
  // Calculate how many images we have
  const totalImages = entry.images.length;
  const totalContent = entry.content.length;

  return (
    <>
      <h1 className={styles.displayTitle}>{entry.title}</h1>
      <h3 className={styles.displayAuthor}>{entry.movie}</h3>
      <h3 className={styles.displayDate}>{entry.date}</h3>

      <div className={styles.displayContent}>
        {entry.content.map((line, idx) => {
          return (
            <div key={idx}>
              <p>{line}</p>

              {/* Display an image after every few paragraphs (divide evenly) */}
              {totalImages > 0 &&
                idx % Math.floor(totalContent / totalImages) === 0 && (
                  <img
                    src={
                      entry.images[
                        Math.floor(idx / Math.ceil(totalContent / totalImages))
                      ]
                    }
                    alt={`Image ${idx + 1}`}
                    className={styles.articleImage}
                  />
                )}
              <br></br>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FullEntry;
