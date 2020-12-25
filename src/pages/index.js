import axios from "axios";
import Head from "next/head";

const Home = props => {
  return (
    <>
      <Head>
        <title>DCC Scanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Homepage</div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
};

export const getServerSideProps = async ctx => {
  // Construct App URL for server side fetching
  const url = ctx.req.protocol + "://" + ctx.req.get("host");

  try {
    // Check if user is authenticated
    const { data } = await axios({
      method: "post",
      url: url + "/api/auth",
      headers: ctx.req.headers
    });

    return { props: { data } };
  } catch (error) {
    console.warn("Error from Index.js: ", error.message);
    // If user is not authenticated, redirect to /login
    if (error.response.status > 400 && ctx.req)
      ctx.res.writeHead(302, {
        Location: url + "/login"
      });
    ctx.res.end();
    return { props: { data: error.response.data } };
  }
};

export default Home;
