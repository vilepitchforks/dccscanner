import { useState } from "react";
import Head from "next/head";
import axios from "axios";

import Navbar from "../components/Navbar/Navbar";
import { authHelper } from "../lib/helpers/auth";

const Rnr = ({ user, availableBrands }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedLocale, setSelectedLocale] = useState(null);
  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setErrMsg(null);

    const endpoint = selectedLocale ? "/single" : "/multi";

    try {
      const { data } = await axios(
        `/api${endpoint}?brand=${selectedBrand}&locale=${selectedLocale}`
      );

      setResults(
        data.map(result => {
          const deets = result?.dccValidation?.details;
          const getReviewsRes = result?.getReviews?.getReviewsResponse;
          const submitReviewRes = result?.submitReview?.submitReviewResponse;

          return {
            Locale: result.locale,
            "Wrong Locale": !deets.locale?.ok ? deets.locale?.fromSite : "",
            "Has DCC": result?.dccValidation?.dccExists,
            // keysOk: result.dccValidation.details.keys.ok,
            "Invalid Keys": deets?.keys?.invalidKeys.join(", "),
            "Missing Required Keys":
              deets?.keys?.missingRequiredKeys.join(", "),
            // productPageURLOk: deets.keys.productPageURL.ok,
            "Wrong PDP URL": !deets?.productPageURL?.ok
              ? deets?.productPageURL?.fromSite
              : "",
            "Wrong Img URL": !deets?.productImageURL?.ok
              ? deets?.productImageURL?.productImageURL
              : "",
            "Category Path": !deets?.categoryPath?.ok
              ? JSON.stringify(deets?.categoryPath?.categoryPath)
              : "",
            "GTINs OK": deets?.GTINs?.ok,
            "Get Reviews Errors": getReviewsRes?.hasErrors
              ? JSON.stringify(getReviewsRes?.Errors)
              : "",
            "Post Review Errors": submitReviewRes?.hasErrors
              ? JSON.stringify(submitReviewRes?.Errors)
              : "",
            "Auth Email":
              result?.submitReview?.submitReviewParams
                ?.HostedAuthentication_AuthenticationEmail,
            "Auth CB":
              result?.submitReview?.submitReviewParams
                ?.HostedAuthentication_CallbackURL,
            FP: result?.submitReview?.submitReviewParams?.fp
          };
        })
      );
      setLoading(false);
    } catch (error) {
      console.warn("Error occurred while scanning all locales.");
      setLoading(false);
      setErrMsg(
        "Error occurred while scaning locales, please try again.",
        error.message
      );
    }
  };

  return (
    <>
      <Head>
        <title>RnR Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} />
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <p className="mt-10">Brand:</p>
          <select
            className="form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            aria-label="Default select example"
            defaultValue="Open this select menu"
            onInput={e => setSelectedBrand(e.target.value)}
          >
            <option>--Select Brand--</option>
            {availableBrands.map(({ brand }) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <p className="mt-10">Locale:</p>
          <select
            className="form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            aria-label="Default select example"
            defaultValue="Open this select menu"
            onInput={e => setSelectedLocale(e.target.value)}
          >
            <option>
              {!selectedBrand ? "--Select Brand--" : "--Select Locale--"}
            </option>
            {selectedBrand
              ? availableBrands
                  .find(({ brand }) => selectedBrand === brand)
                  ?.locales.map(locale => (
                    <option key={locale} value={locale}>
                      {locale}
                    </option>
                  ))
              : null}
          </select>

          <div className="flex flex-col justify-center space-x-2">
            <button
              type="button"
              className="mt-10 inline-block rounded bg-green-600 px-6 py-2.5 text-xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:text-gray-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
              onClick={selectedBrand && handleSubmit}
            >
              {!loading ? "Go" : "Loading..."}
            </button>
            {errMsg ? <p className="text-red-500">{errMsg}</p> : null}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-[1280px] flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-white">
                  <tr>
                    {results.length ? (
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xl font-medium text-gray-900"
                      >
                        #
                      </th>
                    ) : null}
                    {Object.keys(results[0] || {}).map(key => (
                      <th
                        key={key}
                        scope="col"
                        className="px-6 py-4 text-left text-xl font-medium text-gray-900"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, i) => (
                    <tr
                      key={i}
                      className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-xl font-medium text-gray-900">
                        {i + 1}
                      </td>
                      {Object.keys(result).map(key => (
                        <td
                          key={key}
                          className="whitespace-nowrap px-6 py-4 text-xl font-light text-gray-900"
                        >
                          {typeof result[key] === "boolean"
                            ? result[key]
                              ? "\u2714"
                              : "\u2716"
                            : result[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ctx => {
  const userAuthProps = await authHelper(ctx);

  const dev = process.env.NODE_ENV === "development";

  // Construct App URL for server side fetching
  const protocol = dev ? "http" : "https";
  const url = protocol + "://" + ctx.req.get("host");

  try {
    const { data } = await axios({
      method: "get",
      url: url + "/api/single",
      headers: ctx.req.headers
    });

    return {
      props: {
        ...userAuthProps.props,
        ...data
      }
    };
  } catch (error) {
    console.warn("Error occurred while fetching Brands list: ", error.message);
    return userAuthProps;
  }
};

export default Rnr;
