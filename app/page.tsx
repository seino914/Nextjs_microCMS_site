import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { TOP_NEWS_LIMIT } from "./_constants";
import { getNewsList } from "./_libs/microcms";
import styles from "./page.module.css";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Tonosaki Seinosuke</h1>
          <p className={styles.description}>I am a genius web developer</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
