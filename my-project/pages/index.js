import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <Body/>
    </div>
  );
}
