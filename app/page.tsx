import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { News } from "./_libs/microcms";
import styles from "./page.module.css";
import Image from "next/image";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "ハゲました!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/12",
      createdAt: "2024/09/12",
    },
    {
      id: "2",
      title: "24歳になりました!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/14",
      createdAt: "2024/09/14",
    },
    {
      id: "3",
      title: "レート2000達成しました!",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/1",
      createdAt: "2024/09/1",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

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
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
