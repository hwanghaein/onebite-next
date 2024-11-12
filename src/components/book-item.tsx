import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";



interface BookItemProps {
  data: BookData;
}

export default function BookItem({ data }: BookItemProps) {
  return (
    <Link href={`/book/${data.id}`} className={style.container}>
      <img src={data.coverImgUrl} alt="Book cover" />
      <div>
        <div className={style.title}>{data.title}</div>
        <div className={style.subTitle}>{data.subTitle}</div>
        <br />
        <div className={style.author}>
          {data.author} | {data.publisher}
        </div>
      </div>

    </Link>
  );
}
