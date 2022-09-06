import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import Navbar from "../components/Navbar/Navbar";
import { authHelper } from "../lib/helpers/auth";

const mapRes = data =>
  data.map(result => {
    const deets = result?.dccValidation?.details;
    const getReviewsRes = result?.getReviews?.getReviewsResponse;
    const submitReviewRes = result?.submitReview?.submitReviewResponse;

    return {
      Locale: result.locale,
      "Has DCC": result?.dccValidation?.dccExists,
      "Wrong Locale": !deets.locale?.ok ? deets.locale?.fromSite : "",
      "Invalid Keys": deets?.keys?.invalidKeys.join(", "),
      "Missing Required Keys": deets?.keys?.missingRequiredKeys.join(", "),
      "Wrong PDP URL": !deets?.productPageURL?.ok
        ? deets?.productPageURL?.fromSite
        : "",
      "Wrong Img URL": !deets?.productImageURL?.ok
        ? deets?.productImageURL?.productImageURL
        : "",
      "Category Path": !deets?.categoryPath?.ok
        ? JSON.stringify(deets?.categoryPath?.categoryPath)
        : "",
      "GTIN Errors": deets?.GTINs?.messages.join(", "),
      "Get Reviews Errors": getReviewsRes?.HasErrors
        ? getReviewsRes?.Errors.map(error => error.Message).join(", ")
        : "",
      "Post Review Errors": submitReviewRes?.HasErrors
        ? submitReviewRes?.Errors.map(error => error.Message).join(", ")
        : "",
      Errors: result.hasErrors ? result.errors.join() : "",
      "Auth Email":
        result?.submitReview?.submitReviewParams
          ?.HostedAuthentication_AuthenticationEmail,
      "Auth CB":
        result?.submitReview?.submitReviewParams
          ?.HostedAuthentication_CallbackURL,
      FP: result?.submitReview?.submitReviewParams?.fp
    };
  });

const Rnr = ({
  user,
  availableBrands,
  scanInProgress,
  scannedBrand,
  scanResult
}) => {
  const [selectedBrand, setSelectedBrand] = useState(scannedBrand);
  const [selectedLocale, setSelectedLocale] = useState("");
  const [results, setResults] = useState(scanResult);

  const [loadingSingle, setLoadingSingle] = useState(false);
  const [loadingMulti, setLoadingMulti] = useState(scanInProgress);
  const [errMsg, setErrMsg] = useState(null);

  const handleSubmitSingle = async locale => {
    setLoadingSingle(true);
    setErrMsg(null);

    try {
      const { data } = await axios(
        `/api/single?brand=${selectedBrand}&locale=${locale}`
      );

      setResults(mapRes(data));
      setLoadingSingle(false);
    } catch (error) {
      console.warn("Error occurred while scanning all locales.", error.message);
      setLoadingSingle(false);
      setErrMsg("Error occurred while scaning locales, please try again.");
    }
  };

  const handleSubmitMulti = async brand => {
    setLoadingMulti(true);
    setErrMsg(null);

    try {
      const { data: initiScanStats } = await axios(`/api/multi?brand=${brand}`);

      setResults(mapRes(initiScanStats.scanResult));

      const intId = setInterval(async () => {
        const { data: scanStats } = await axios("/api/multi/result");

        setResults(mapRes(scanStats.scanResult));

        if (!scanStats.scanInProgress) {
          setLoadingMulti(false);
          clearInterval(intId);
        }
      }, 2000);
    } catch (error) {
      console.warn("Error occurred while scanning all locales.", error.message);
      setLoadingMulti(false);
      setErrMsg("Error occurred while scaning locales, please try again.");
    }
  };

  useEffect(() => {
    if (scanInProgress) handleSubmitMulti(selectedBrand);
  }, []);

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
            defaultValue={scannedBrand}
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
            <div className="flex justify-between">
              <button
                type="button"
                className="mt-10 inline-block rounded bg-green-600 px-6 py-2.5 text-xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:text-gray-100 hover:shadow-lg disabled:bg-gray-600 disabled:shadow-none"
                onClick={() =>
                  selectedBrand && handleSubmitSingle(selectedLocale)
                }
                disabled={
                  loadingSingle ||
                  loadingMulti ||
                  (selectedBrand.length && selectedLocale.length) === 0
                }
              >
                {!loadingSingle ? "Scan" : "Scanning..."}
              </button>

              <button
                type="button"
                className="mt-10 inline-block rounded bg-green-600 px-6 py-2.5 text-xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:text-gray-100 hover:shadow-lg disabled:bg-gray-600 disabled:shadow-none"
                onClick={() =>
                  selectedBrand && handleSubmitMulti(selectedBrand)
                }
                disabled={loadingSingle || loadingMulti || !selectedBrand}
              >
                {!loadingMulti ? "Scan all" : "Scanning..."}
              </button>
            </div>

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
  const {
    props: { user }
  } = await authHelper(ctx);

  const dev = process.env.NODE_ENV === "development";

  // Construct App URL for server side fetching
  const protocol = dev ? "http" : "https";
  const url = protocol + "://" + ctx.req.get("host");

  try {
    const [brandsLocales, scanData] = await Promise.all([
      axios({
        url: url + "/api/single",
        headers: ctx.req.headers
      }),
      axios({
        url: url + "/api/multi/result",
        headers: ctx.req.headers
      })
    ]);

    const availableBrands = brandsLocales.data.availableBrands;
    const { scanInProgress, scannedBrand, scanResult } = scanData.data;

    return {
      props: {
        user,
        availableBrands,
        scanInProgress,
        scannedBrand,
        scanResult: mapRes(scanResult)
      }
    };
  } catch (error) {
    console.warn("Error occurred while fetching Brands list: ", error.message);
    return userAuthProps;
  }
};

export default Rnr;
