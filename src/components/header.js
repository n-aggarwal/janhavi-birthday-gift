"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Janhavi</div>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link
              href="/about"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/diary-entry"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              Diary Entry
            </Link>
          </li>
          <li>
            <Link
              href="/news-article"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              News Article
            </Link>
          </li>
          <li>
            <Link
              href="/poem"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              Poem
            </Link>
          </li>
          <li>
            <Link
              href="/book-review"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              Book Review
            </Link>
          </li>
          <li>
            <Link
              href="/movie-review"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              Movie Review
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
