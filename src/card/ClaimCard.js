import React from "react";

const ClaimCard = ({ details }) => {
  return (
    <div>
      <div className="transaction__card medium-text">
        <div className="transaction__card-header">
          <p className="transaction__card-header-id">TRANSACTION ID/DATE</p>
          <p className="transaction__card-header-type">TRANSACTION TYPE</p>
          <p className="transaction__card-header-amount">AMOUNT (NGN)</p>
        </div>
        {details.map(detail => (
          <div className="transaction__card-details">
            <span>
              <p>{detail.id}</p>
              <p className="smaller-text blue">{detail.date}</p>
            </span>
            <p>{detail.type}</p>
            <p>{detail.number}</p>
            <p>{detail.lossDate}</p>
            <p>{detail.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimCard;
