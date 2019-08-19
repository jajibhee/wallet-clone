import React from "react";

import pencil from "../icons/pencil-write.svg";
import shipment from "../icons/shipment-sync.svg";
import SideCard from "./SideCard";

const Main = () => {
  return (
    <div className="main">
      <div className="main_ medium-text">
        <div className="main__profile">
          <div className="main__profile-details">
            <section className="main__profile-details-header">
              <h1 className="main__profile-details-header-title">
                Profile detail
              </h1>
              <ul className="aside-item">
                <img
                  className="aside-item__icon"
                  src={pencil}
                  alt="dashboard-icon"
                />
                <li className="aside-item__text smaller-text blue">edit</li>
              </ul>
            </section>
            <section className="main__profile-details-content">
              <div className="main__profile-details-content--info">
                <span className="main__profile-details-content--info-img">
                  <img src={shipment} alt="" />
                </span>
                <span className="main__profile-details-content--info-text">
                  <p class="smaller-text grey">Business Name</p>
                  <p className="medium-text">Chisco Motors LTD</p>
                </span>
              </div>
            </section>
          </div>

          <div className="main__profile-details">
            <section className="main__profile-details-header">
              <h1 className="main__profile-details-header-title">
                Profile Detail
              </h1>
              <ul className="aside-item">
                <img
                  className="aside-item__icon"
                  src={pencil}
                  alt="dashboard-icon"
                />
                <li className="aside-item__text smaller-text blue">edit</li>
              </ul>
            </section>
            <section className="main__profile-details-content cargo">
              <div className="main__profile-details-content--info ">
                <span className="main__profile-details-content--info-img">
                  <img src={shipment} alt="" />
                </span>
                <span className="main__profile-details-content--info-text">
                  <p className="smaller-text grey">Business Name</p>
                  <p className="medium-text">Chisco Motors LTD</p>
                </span>
              </div>
            </section>
          </div>
          <div className="main__profile-image">
            <img className="main__profile-image-circle" src="" alt=" " />
            <button class="button--small">Choose file</button>
          </div>
        </div>
        <div className="transaction__card medium-text">
          <div className="transaction__card-header">
            <p className="transaction__card-header-id">Transaction Id/date</p>
            <p className="transaction__card-header-type">Transaction type</p>
            <p className="transaction__card-header-amount">Amount(NGN)</p>
          </div>
          <div className="transaction__card-details">
            <span>
              <p>AXDS77788990</p>
              <p className="smaller-text blue">August 10, 2019</p>
            </span>
            <p>Wallet top up</p>
            <p>300,000</p>
          </div>
          <div className="transaction__card-details">
            <span>
              <p>AXDS77788990</p>
              <p className="smaller-text blue">August 10, 2019</p>
            </span>
            <p>Wallet top up</p>
            <p>300,000</p>
          </div>
        </div>
      </div>
      <SideCard />
    </div>
  );
};

export default Main;
