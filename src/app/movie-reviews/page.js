"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./movie-reviews.module.css";
import { movieReviews } from "@/data/movie-reviews";
import SingleEntry from "./content-item.js";
import FullEntry from "./display-item";

const Diary = () => {
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <div className={styles.body}>
      <div className={styles.diaryContainer}>
        <div className={styles.contentsHeading}>MOVIE REVIEWS</div>

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
                {movieReviews.map((entry, idx) => (
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
      </div>
    </div>
  );
};

export default Diary;
