import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/claim");
    }, 1500);
  };

  return (
    <Fragment>
      <Logo />
      <form className="form-input" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          type="email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          type="password"
        />
        <input
          type="submit"
          disabled={loading}
          value={loading ? "Signing in..." : "SIGN IN"}
          LOGIN
        />

        <Link to="/register">
          {" "}
          Do Not Have An Account ? <br /> REGISTER
        </Link>
      </form>
    </Fragment>
  );
};

export default Login;
