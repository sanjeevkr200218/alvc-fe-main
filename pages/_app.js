import "@/styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  );
}
