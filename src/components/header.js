"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="\" className={styles.logo}>
        Janhavi
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li></li>
          <li>
            <Link
              href="/diary-entry"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              Diary Entries
            </Link>
          </li>
          <li>
            <Link
              href="/news-articles"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              News Articles
            </Link>
          </li>
          <li>
            <Link
              href="/poems"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              Poems
            </Link>
          </li>
          <li>
            <Link
              href="/book-reviews"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              Book Reviews
            </Link>
          </li>
          <li>
            <Link
              href="/movie-reviews"
              className={styles.navItem}
              onClick={() => setMenuOpen(false)}
            >
              Movie Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
