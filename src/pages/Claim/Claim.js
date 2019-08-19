import React, { Fragment } from "react";
import Wrapper from "../../components/Wrapper";
import ClaimCard from "../../card/ClaimCard";

const Claim = () => {
  return (
    <Fragment>
      <Wrapper title="CLAIM ">
        <ClaimCard
          details={[
            {
              id: "aha",
              date: "ddd",
              type: "dd",
              number: "jaja",
              lossDate: "bhee",
              action: 111
            },
            {
              id: "aha",
              date: "ddd",
              type: "dd",
              status: "jaja",
              trip: "bhee",
              action: 111
            }
          ]}
        />
      </Wrapper>
    </Fragment>
  );
};

export default Claim;
