import Head from "next/head";

import LoginForm from "../components/LoginForm/LoginForm";

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="column">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
