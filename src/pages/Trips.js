import React from "react";
import Wrapper from "../components/Wrapper";
import TripCard from "../card/TripCard";

const Trips = () => {
  return (
    <div>
      <Wrapper title="TRIP LIST">
        <TripCard
          details={[
            {
              id: "aha",
              date: "ddd",
              route: "dd",
              truck: "jaja",
              driver: "bhee",
              subCat: "bhee",
              cargo: "bhee",
              tonage: 111,
              ett: 111,
              actions: 111
            },
            {
              id: "bbb",
              date: "ccc",
              route: "eee",
              truck: "jaja",
              driver: "bhee",
              subCat: "bhee",
              cargo: "bhee",
              tonage: 111,
              ett: 111,
              actions: 111
            }
          ]}
        />
      </Wrapper>
    </div>
  );
};

export default Trips;
