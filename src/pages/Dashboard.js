import React, { Fragment } from "react";
import Wrapper from "../components/Wrapper";

const Dashboard = () => {
  return (
    <Fragment>
      <Wrapper title="Chisco Motors" showDate={true}>
        <div className="dashboard-card" dshjs />
      </Wrapper>
    </Fragment>
  );
};

export default Dashboard;
