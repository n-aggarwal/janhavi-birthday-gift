"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./news-articles.module.css";
import { NewsArticles } from "@/data/NewsArticles";
import SingleEntry from "./content-item.js";
import FullEntry from "./display-item";

const Diary = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className={styles.diaryContainer}>
      <div className={styles.diary}>
        <div className={styles.textbox}>
          {selectedEntry ? (
            <>
              {" "}
              <FullEntry
                entry={selectedEntry}
                onBack={() => setSelectedEntry(null)}
              />{" "}
            </>
          ) : (
            <>
              {NewsArticles.map((entry, idx) => (
                <SingleEntry
                  key={idx}
                  entry={entry}
                  onClick={() => setSelectedEntry(entry)}
                />
              ))}
            </>
          )}
        </div>
      </div>

      {selectedEntry && (
        <div className={styles.pagination}>
          {
            <button
              className={`${styles.pageButton} ${styles.backButton}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEntry(null);
              }}
            >
              &#x21A9;
            </button>
          }
        </div>
      )}
    </div>
  );
};

export default Diary;
