import axios from "axios";

export const authHelper = async ctx => {
  const dev = process.env.NODE_ENV === "development";

  // Construct App URL for server side fetching
  const protocol = dev ? "http" : "https";
  const url = protocol + "://" + ctx.req.get("host");

  try {
    // Check if user is authenticated
    const { data } = await axios({
      method: "post",
      url: url + "/api/auth",
      headers: ctx.req.headers
    });

    return { props: { user: data } };
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
