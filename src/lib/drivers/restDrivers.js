const makeDriver = ({ method, endpoint, format }) => async ({
  email,
  query,
  body
}) => {
  try {
    // Reset repeated additions of query to endpoint
    endpoint = endpoint.split("?")[0];
    endpoint = query ? endpoint + "?" + query : endpoint;

    const options = {
      method,
      credentials: "same-origin",
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
    console.warn("driver err", error);
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

export const slugDriver = makeDriver({
  method: "GET",
  endpoint: "/api/slug",
  format: "json"
});
