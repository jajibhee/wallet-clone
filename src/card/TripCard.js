import React from "react";

const TripCard = ({ details }) => {
  return (
    <div>
      <div className="transaction__card medium-text">
        <div className="transaction__card-header">
          <p className="transaction__card-header-id">TRANSACTION ID/DATE</p>
          <p className="transaction__card-header-type">TRANSACTION TYPE</p>
          <p className="transaction__card-header-amount">jaji</p>
          <p className="transaction__card-header-amount">jaji</p>
          <p className="transaction__card-header-amount">jaji</p>
          <p className="transaction__card-header-amount">jaji</p>
          <p className="transaction__card-header-amount">jaji</p>
          <p className="transaction__card-header-amount">jaji</p>
          <p className="transaction__card-header-amount">jaji</p>
        </div>
        {details.map(detail => (
          <div className="transaction__card-details">
            <span>
              <p>{detail.id}</p>
              <p className="smaller-text blue">{detail.date}</p>
            </span>
            <p>{detail.route}</p>
            <p>{detail.truck}</p>
            <p>{detail.driver}</p>
            <p>{detail.cargo}</p>
            <p>{detail.subCat}</p>
            <p>{detail.tonage}</p>
            <p>{detail.ett}</p>
            <p>{detail.actions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripCard;
