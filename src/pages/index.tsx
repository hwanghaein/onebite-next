import SearchableLayout from '@/components/searchable-layout';
import style from "./index.module.css";
import { ReactNode } from 'react';
import books from '@/mock/books.json'
import BookItem from '@/components/book-item';

export default function Home() {
  return (
    <div className={style.container}>
      <section >
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} data={book} />
        ))}

      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} data={book} />
        ))}


      </section>
    </div>
  );
}

// JS의 모든 함수들은 다 객체이기 때문에 메서드 사용 가능
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}

// getLayout 메서드를 호출하고 인수로 어떠한 페이지 컴포넌트를 전달하면, 
// 해당 페이지 컴포넌트를 이러한 레이아웃으로 묶어서 return 해줌