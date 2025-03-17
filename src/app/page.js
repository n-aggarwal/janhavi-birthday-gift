import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/photo-outline.png"
          alt="Next.js logo"
          width={502}
          height={610}
          priority
        />
      </main>
      <div className={styles.desc}>
        Janhavi (she/her) is a sophomore double-majoring in the COL and
        Government, with a minor in Human Rights Advocacy. Outside of the Argus,
        she does research for the Center for Prison Education and works as the
        Digital Communications Asst. for the COL. She loves coffee and
        compound-adjectives.
      </div>
    </div>
  );
}
