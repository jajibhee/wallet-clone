import React from "react";

const TripCard = ({ details }) => {
  return (
    <div>
      <div className="transaction__card medium-text ">
        <div className="transaction__card-header incident-card">
          <p className="transaction__card-header-id">TRANSACTION DATE</p>
          <p className="transaction__card-header-type">TRIP ID</p>
          <p className="transaction__card-header-amount">TRIP TYPE</p>
          <p className="transaction__card-header-amount">STATUS</p>
          <p className="transaction__card-header-amount">ACTIONS</p>
        </div>
        {details.map(detail => (
          <div className="transaction__card-details incident-card">
            <span>
              <p>{detail.id}</p>
              <p className="smaller-text blue">{detail.date}</p>
            </span>
            <p>{detail.trip}</p>
            <p>{detail.status}</p>
            <p>{detail.type}</p>
            <p>{detail.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripCard;
