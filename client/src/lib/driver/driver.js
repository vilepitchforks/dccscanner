const makeDriver = ({ method, endpoint }) => async ({ email, body }) => {
  try {
    const options = {
      method,
      credentials:
        process.env.NODE_ENV === "development" ? "include" : "same-origin",
      headers: {}
    };

    if (email) options.headers.Authorization = "Basic " + btoa(email);
    if (body) options.body = JSON.stringify(body);

    let status;

    const result = await fetch(endpoint, options).then(res => {
      status = res.status;
      return res.text();
    });

    if (status === 200 || status === 201) {
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const authDriver = makeDriver({ method: "POST", endpoint: "/api/auth" });
