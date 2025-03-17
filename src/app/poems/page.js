"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./poems.module.css";
import { Poems } from "@/data/poems";
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
              <h1 className={styles.contentsHeading}>Poems</h1>
              {Poems.map((entry, idx) => (
                <SingleEntry
                  key={idx}
                  title={entry.title}
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
