import Router from "next/router";
import { useState } from "react";

import css from "./LoginForm.module.css";

import { authDriver } from "../../lib/drivers/restDrivers";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setCheck("");

    const auth = await authDriver({ email });

    if (auth) {
      // Redirect to "/" after successfull login
      Router.replace("/");
    } else {
      setCheck("Invalid credentials");
    }
  };

  return (
    <div className={css.formContainer}>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <input
          className={css.inputEmail}
          required
          name="email"
          type="email"
          placeholder="Email"
          onInput={e => setEmail(e.target.value)}
        />
        <button className={`${css.inputButton} green3`} type="submit">
          Enter
        </button>
        <div className={css.invalidCreds}>{check}</div>
      </form>
    </div>
  );
};

export default LoginForm;
