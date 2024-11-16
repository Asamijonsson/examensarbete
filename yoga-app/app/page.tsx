import Image from "next/image";
import styles from "./page.module.css";
import Booking from "../pages/booking/page.tsx";
import Footer from "../components/Footer/footer.tsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Welcome to Yo! yoga!</p>
        <Image src="/image3.jpg" alt="File icon" width={700} height={500} />
      </main>
      <Booking />
      <Footer />
    </div>
  );
}
