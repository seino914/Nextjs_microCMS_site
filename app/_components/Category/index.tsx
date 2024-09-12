import { category } from "@/app/_libs/microcms";
import styles from "./index.module.css";

type Props = {
  category: category;
};

export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
