import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from 'react';

export default function Page() {
  const router = useRouter(); // router 객체
  const q = router.query.q;

  return <h1>Search {q}</h1>
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}