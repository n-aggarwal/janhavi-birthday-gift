"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./diary-entry.module.css";
import { diaryEntries } from "@/data/diaryEntries.js"; // Import entries
import SingleEntry from "./content-item.js";

const Diary = () => {
  const [imageChanged, setImageChanged] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
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

    // Use ResizeObserver to detect container size changes dynamically
    const observer = new ResizeObserver(() => calculateEntriesPerPage());
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [imageChanged]);

  const startIdx = currentPage * entriesPerPage;
  const endIdx = startIdx + entriesPerPage;
  const visibleEntries = diaryEntries.slice(startIdx, endIdx);

  return (
    <div className={styles.diaryContainer} ref={containerRef}>
      <div
        className={styles.diary}
        style={{
          backgroundImage: imageChanged
            ? 'url("/open-diary.jpg")'
            : 'url("/diary-cover.jpeg")',
        }}
        onClick={() => setImageChanged(true)}
      >
        {imageChanged && (
          <>
            <div className={`${styles.half} ${styles.left}`}>
              <h1 className={styles.contentsHeading}>Contents</h1>
              {visibleEntries
                .slice(0, Math.floor(entriesPerPage / 2))
                .map((entry, index) => (
                  <SingleEntry
                    key={index}
                    title={entry.title}
                    date={entry.date}
                  />
                ))}
            </div>
            <div className={`${styles.half} ${styles.right}`}>
              {visibleEntries
                .slice(Math.floor(entriesPerPage / 2))
                .map((entry, index) => (
                  <SingleEntry
                    key={index}
                    title={entry.title}
                    date={entry.date}
                  />
                ))}
            </div>
          </>
        )}
      </div>
      {/* Pagination Buttons Inside the Diary */}
      <div className={styles.pagination}>
        {imageChanged && currentPage > 0 && (
          <button
            className={`${styles.pageButton} ${styles.backButton}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentPage((prev) => Math.max(prev - 1, 0));
            }}
          >
            Back Page
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
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default Diary;
