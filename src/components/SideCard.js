import React from "react";
import shipment from "../icons/shipment-sync.svg";

const SideCard = () => {
  return (
    <div className="balance-card">
      <div className="side-card">
        <div className="wallet-balance">
          <div className="main__profile-details-content--info blue-card">
            <span className="main__profile-details-content--info-img">
              <img src={shipment} alt="" />
            </span>
            <span className="main__profile-details-content--info-text">
              <p className="medium-text">Wallet Balance</p>
              <p className="small-text grey">NGN 250,000</p>
            </span>
          </div>
        </div>
        <div className="wallet-balance">
          <div className="main__profile-details-content--info yellow-card">
            <span className="main__profile-details-content--info-img">
              <img src={shipment} alt="" />
            </span>
            <span className="main__profile-details-content--info-text">
              <p className="medium-text">Wallet Balance</p>
              <p className="small-text">NGN 250,000</p>
            </span>
          </div>
          <div className="main__profile-details-content--info">
            <span className="main__profile-details-content--info-img">
              <img src={shipment} alt="" />
            </span>
            <span className="main__profile-details-content--info-text">
              <p className="medium-text">Chisco Motors LTD</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
