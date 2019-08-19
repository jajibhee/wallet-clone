import React from "react";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Logo from "./Logo";

const Wrapper = ({ children, title, showDate }) => {
  return (
    <div className="grid-container">
      <Logo />
      <Navbar title={title} showDate={showDate} />
      <Aside />
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
