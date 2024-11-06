import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter(); // router 객체
  const q = router.query.q;

  return <h1>Search {q}</h1>
}

