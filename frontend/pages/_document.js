import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='author' content='Sodiq Sanusi'/>
        <meta name='description' content='The interface of my first ever MERN app'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}