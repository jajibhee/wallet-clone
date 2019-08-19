import React from "react";
import Wrapper from "../components/Wrapper";
import IncidentCard from "../card/IncidentCard";

const Incident = () => {
  return (
    <div>
      <Wrapper title="INCIDENT LIST">
        <IncidentCard
          details={[
            {
              id: "aha",
              date: "ddd",
              type: "dd",
              status: "jaja",
              trip: "bhee",
              action: 111
            },
            {
              id: "bbb",
              date: "ccc",
              type: "eee",
              status: "jaja",
              trip: "bhee",
              action: 111
            }
          ]}
        />
      </Wrapper>
    </div>
  );
};

export default Incident;
