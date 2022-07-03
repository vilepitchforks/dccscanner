import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import WebList from "../components/WebList/WebList";
import NewScan from "../components/NewScan/NewScan";
import { authHelper } from "../lib/helpers/auth";

const Home = ({ user }) => {
  return (
    <>
      <Head>
        <title>DCC Scanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} />
      <WebList />
      <NewScan />
    </>
  );
};

export const getServerSideProps = async ctx => authHelper(ctx);

export default Home;
