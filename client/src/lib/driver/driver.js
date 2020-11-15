const makeDriver = ({ method, endpoint, format }) => async ({
  email,
  query,
  body
}) => {
  try {
    endpoint = query ? endpoint + "?" + query : endpoint;

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
      return res[format]();
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

export const authDriver = makeDriver({
  method: "POST",
  endpoint: "/api/auth",
  format: "text"
});

export const scanDriver = makeDriver({
  method: "GET",
  endpoint: "/api/scan",
  format: "json"
});
