import React from "react";
import shipment from "../icons/shipment-sync.svg";
import pencil from "../icons/pencil-write.svg";

const Card = ({ header, details }) => {
  return (
    <div className="main__profile-details">
      <section class="main__profile-details-header">
        <h1 class="main__profile-details-header-title">{header}</h1>
        <ul class="aside-item">
          <img class="aside-item__icon" src={pencil} alt="dashboard-icon" />
          <li class="aside-item__text smaller-text blue">edit</li>
        </ul>
      </section>
      {details.map(detail => (
        <section class="main__profile-details-content">
          <div class="main__profile-details-content--info">
            <span class="main__profile-details-content--info-img">
              <img src={shipment} alt="" />
            </span>
            <span class="main__profile-details-content--info-text">
              <p class="smaller-text grey">{detail.title}</p>
              <p class="medium-text">{detail.info}</p>
            </span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Card;
