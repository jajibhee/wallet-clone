import React from "react";
import { NavLink } from "react-router-dom";

import dashboard from "../icons/dashboard.svg";
import truck from "../icons/truck-cargo.svg";
import incident from "../icons/incident.svg";
import claim from "../icons/common-file-upload.svg";
import profile from "../icons/wallet.svg";
import logout from "../icons/logout-1.svg";

const Aside = () => {
  return (
    <div className="aside">
      <ul className="aside-item pad-top-2">
        <img
          className="aside-item__icon"
          src={dashboard}
          alt="dashboard-icon"
        />

        <li className="aside-item__text">
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
      </ul>
      <ul className="aside-item">
        <img className="aside-item__icon" src={truck} alt="truck-icon" />
        <li className="aside-item__text">
          <NavLink to="/trips" activeClassName="active">
            Trips
          </NavLink>
        </li>
      </ul>
      <ul className="aside-item">
        <img className="aside-item__icon" src={incident} alt="truck-icon" />

        <li className="aside-item__text">
          <NavLink to="/incident" activeClassName="active">
            Incident
          </NavLink>
        </li>
      </ul>
      <ul className="aside-item">
        <img className="aside-item__icon" src={claim} alt="truck-icon" />
        <NavLink to="/claim" activeClassName="active">
          <li className="aside-item__text">Claim</li>
        </NavLink>
      </ul>
      <ul className="aside-item">
        <img className="aside-item__icon" src={profile} alt="truck-icon" />

        <li className="aside-item__text">
          <NavLink to="/profile" activeClassName="active">
            Profile{" "}
          </NavLink>
        </li>
      </ul>
      <ul className="aside-item pad-top-2">
        <img className="aside-item__icon " src={logout} alt="truck-icon" />
        <NavLink to="/logout" activeClassName="active">
          <li className="aside-item__text">Log out</li>
        </NavLink>
      </ul>
      ;
    </div>
  );
};

export default Aside;
