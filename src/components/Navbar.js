import React from "react";

const Navbar = ({ title, showDate }) => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <p className="navbar-item_title flex">
          {title}
          <small className="small-text grey">
            {showDate &&
              new Date()
                .toJSON()
                .slice(0, 10)
                .replace(/-/g, "/")}
          </small>
        </p>
        <ul className="navbar-item_list">
          <span className="navbar-item_list-profile__circle">OA</span>
          <li className="navbar-item_list-profile__name">Opeyemi Ajagbe</li>
          <li> | </li>
          <li className="navbar-item_list-profile__status">Super Admin</li>

          <button className="navbar-item_list-profile__button button--grey">
            Global
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
