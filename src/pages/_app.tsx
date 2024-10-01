import type { AppProps } from "next/app";
import { Salt } from "../providers/Salt";
import "../styles/global.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arjun Naha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Salt>
        <Component {...pageProps} />
      </Salt>
    </>
  );
}
