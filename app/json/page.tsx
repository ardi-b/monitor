import Image from "next/image";
import styles from "../page.module.css";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Json',
}

export default async function Json() {
  const getJson = async () => {
    const res = await fetch('https://dummyjson.com/quotes')
    return res.json()
  }

  const data = await getJson()

  return (
    <div>
      {
        data.quotes.map((item) => (
          <div className={styles.json} key={item.id}>
            <div className={styles.fieldJson}>{item.id}</div>
            <div className={styles.fieldJson}>{item.author}</div>
            <div className={styles.fieldJson}>{item.quote}</div>
          </div>
        ))
      }
    </div>
  );
}
