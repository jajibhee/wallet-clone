import React, { Fragment } from "react";
import add from "../icons/image-add.svg";
import SideCard from "../components/SideCard";
import Wrapper from "../components/Wrapper";
import Card from "../card/Card";
import ProfileCard from "../card/ProfileCard";

const Profile = () => {
  return (
    <Fragment>
      <Wrapper title="PROFILE" showDate={false}>
        <div className="main">
          <div className="main_ medium-text">
            <div className="main__profile">
              <Card
                header="JajiBhee Card"
                details={[
                  {
                    title: "Business name",
                    info: "Chisco Motors LTD"
                  },
                  {
                    title: "Email Address",
                    info: "Adio"
                  },
                  {
                    title: "Phone",
                    info: "Ajala"
                  },
                  {
                    title: "Last name",
                    info: "Ajala"
                  }
                ]}
              />
              <Card
                header="JajiBhee Card"
                details={[
                  {
                    title: "Business name",
                    info: "Chisco Motors LTD"
                  },
                  {
                    title: "Email Address",
                    info: "Adio"
                  },
                  {
                    title: "Email Address",
                    info: "Adio"
                  }
                ]}
              />
              <div className="main__profile-image">
                <div className="main__profile-image-circle">
                  {" "}
                  <img src={add} alt="" />
                </div>
                <button class="button--small">Choose file</button>
              </div>
            </div>

            <ProfileCard
              details={[
                {
                  id: "aha",
                  date: "ddd",
                  type: "dd",
                  amount: 111
                },
                {
                  id: "bbb",
                  date: "ccc",
                  type: "eee",
                  amount: 111
                }
              ]}
            />
          </div>
          <SideCard />
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Profile;
