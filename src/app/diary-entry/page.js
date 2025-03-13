"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./diary-entry.module.css";
import { diaryEntries } from "@/data/diaryEntries.js";
import SingleEntry from "./content-item.js";
import FullEntry from "./display-item"; // Import FullEntry component

const Diary = () => {
  const [imageChanged, setImageChanged] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateEntriesPerPage = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        const itemHeight = 90; // Approximate height of each entry
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
  const visibleEntries = diaryEntries.slice(startIdx, endIdx);

  const leftEntriesCount =
    currentPage === 0
      ? Math.floor(entriesPerPage / 2) - 2
      : Math.floor(entriesPerPage / 2);
  const rightEntriesCount = Math.floor(entriesPerPage / 2);

  return (
    <div className={styles.diaryContainer} ref={containerRef}>
      <div
        className={styles.diary}
        style={{
          backgroundImage: imageChanged
            ? 'url("/open-diary.jpg")'
            : 'url("/diary-cover.jpeg")',
          width: imageChanged ? "1000px" : "500px",
        }}
        onClick={() => setImageChanged(true)}
      >
        {imageChanged && selectedEntry ? (
          <FullEntry
            entry={selectedEntry}
            onBack={() => setSelectedEntry(null)}
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
                      date={entry.date}
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
                      date={entry.date}
                      onClick={() => setSelectedEntry(entry)} // Pass the click handler here
                    />
                  ))}
              </div>
            </>
          )
        )}
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

          {imageChanged && endIdx < diaryEntries.length && (
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
    </div>
  );
};

export default Diary;
