import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>welcome to Yo! Yoga!</p>
        <Image src="./image/adam-vradenburg-GA09PKfRIQY-unsplash.jpg" alt="" />
      </main>
    </div>
  );
}
