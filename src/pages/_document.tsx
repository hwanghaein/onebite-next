import { Html, Head, Main, NextScript } from "next/document";

// Next App에 모든 페이지에 공통적으로 적용될 로직, 레이아웃, 데이터를 다루는 파일

export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}


