import React from "react";
import Wrapper from "../components/Wrapper";

const Logout = ({ history }) => {
  return <div>{history.push("/")}</div>;
};

export default Logout;
