//@ts-check
const axios = require("axios").default;
const { AxiosRequestConfig } = require("axios");

/**
 * Axios request with added credentials for fetching websites with Basic authentication
 * @param {string} url URL to fetch with Axios
 * @param {string[]} creds Array containing username and password strings for Basic authentication
 * @returns {Promise<Object>}
 */
exports.axiosWithAuth = async (url, creds) => {
  /**
   * @type {AxiosRequestConfig}
   */
  const payload = {
    method: "GET",
    url
  };

  if (creds) payload.auth = { username: creds[0], password: creds[1] };

  return await axios(payload);
};
