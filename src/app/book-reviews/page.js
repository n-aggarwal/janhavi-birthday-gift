"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./book-reviews.module.css";
import { BookReviews } from "@/data/book-reviews-data";
import SingleEntry from "./content-item.js";
import FullEntry from "./display-item"; // Import FullEntry component

const Diary = () => {
  const [imageChanged, setImageChanged] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [entryPage, setEntryPage] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateEntriesPerPage = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        const itemHeight = 180; // Approximate height of each entry
        const entriesFit = Math.floor(containerHeight / itemHeight);
        setEntriesPerPage(entriesFit * 2); // Multiply by 2 since we use two columns
      }
    };

    const observer = new ResizeObserver(() => calculateEntriesPerPage());
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [imageChanged]);

  const startIdx = currentPage * entriesPerPage;
  const endIdx = startIdx + entriesPerPage;
  const visibleEntries = BookReviews.slice(startIdx, endIdx);

  const leftEntriesCount =
    currentPage === 0
      ? Math.floor(entriesPerPage / 2) - 1
      : Math.floor(entriesPerPage / 2);
  const rightEntriesCount = Math.floor(entriesPerPage / 2);

  return (
    <div style={{ padding: imageChanged ? "0 15vw" : "0 30vw" }}>
      <div className={styles.diaryContainer} ref={containerRef}>
        <div
          className={styles.diary}
          style={{
            backgroundImage: imageChanged
              ? 'url("/book-review-open.jpeg")'
              : 'url("/book-review-cover.jpeg")',
            width: imageChanged ? "1000px" : "500px",
          }}
          onClick={() => setImageChanged(true)}
        >
          {imageChanged && selectedEntry ? (
            <FullEntry
              entry={selectedEntry}
              entryPage={entryPage}
              setEntryPage={setEntryPage}
              onBack={() => {
                setSelectedEntry(null);
                setEntryPage(0);
              }}
            />
          ) : (
            imageChanged && (
              <>
                <div className={`${styles.half} ${styles.left}`}>
                  {currentPage === 0 && (
                    <h1 className={styles.contentsHeading}>Contents</h1>
                  )}
                  {visibleEntries
                    .slice(0, leftEntriesCount)
                    .map((entry, index) => (
                      <SingleEntry
                        key={index}
                        title={entry.title}
                        bookTitle={entry.bookTitle}
                        author={entry.author}
                        onClick={() => setSelectedEntry(entry)} // Pass the click handler here
                      />
                    ))}
                </div>
                <div className={`${styles.half} ${styles.right}`}>
                  {visibleEntries
                    .slice(
                      Math.floor(entriesPerPage / 2),
                      Math.floor(entriesPerPage / 2) + rightEntriesCount
                    )
                    .map((entry, index) => (
                      <SingleEntry
                        key={index}
                        title={entry.title}
                        bookTitle={entry.bookTitle}
                        author={entry.author}
                        onClick={() => setSelectedEntry(entry)} // Pass the click handler here
                      />
                    ))}
                </div>
                {!selectedEntry && (
                  <div className={styles.pagination}>
                    {imageChanged && currentPage > 0 && (
                      <button
                        className={`${styles.pageButton} ${styles.backButton}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPage((prev) => Math.max(prev - 1, 0));
                        }}
                      >
                        &#8592;
                      </button>
                    )}

                    {imageChanged && endIdx < BookReviews.length && (
                      <button
                        className={`${styles.pageButton} ${styles.nextButton}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPage((prev) => prev + 1);
                        }}
                      >
                        &#8594;
                      </button>
                    )}
                  </div>
                )}
              </>
            )
          )}
        </div>

        {imageChanged && selectedEntry && (
          <div className={styles.pagination}>
            {
              <button
                className={`${styles.pageButton} ${styles.backButton}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEntry(null);
                  setEntryPage(0);
                }}
              >
                &#x21A9;
              </button>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Diary;
