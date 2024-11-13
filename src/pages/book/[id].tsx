import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-book";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id; // 타입 단언을 써도 안전한 이유는 [id].tsx 페이지는 무조건 URL 파라미터가 하나 있어야만 접근할 수 있는 페이지이기 때문임
  const book = await fetchOneBook(Number(id))

  return {
    props: {book,},
  };
}

export default function Page({book,} : InferGetServerSidePropsType<typeof getServerSideProps >) {
  if(!book) return "문제가 발생했습니다. 다시 시도하세요."
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt={`${title} cover`} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>{author} | {publisher}</div>

      <div className={style.description}>{description}</div>
    </div>
  );
}
