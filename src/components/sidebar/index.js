import React from "react";
import "./style.css";

import { ReactComponent as Dashboard } from "../../assests/sidebar/dashboard.svg";
import { ReactComponent as Customer } from "../../assests/sidebar/customer.svg";
import { ReactComponent as Geography } from "../../assests/sidebar//geography.svg";
import { ReactComponent as Conversations } from "../../assests/sidebar//conversations.svg";
import { ReactComponent as Deals } from "../../assests/sidebar//deals.svg";
import { ReactComponent as Export } from "../../assests/sidebar//export.svg";
import { ReactComponent as Report } from "../../assests/sidebar/report.svg";
import { ReactComponent as Logo } from "../../assests/logo/Logo.svg";
import { ReactComponent as Search } from "../../assests/icons/search.svg";
import { ReactComponent as Profile } from "../../assests/icons/profile.svg";
import { ReactComponent as Setting } from "../../assests/sidebar/setting.svg";
import { ReactComponent as Logout } from "../../assests/sidebar/logout.svg";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Logo />
      </div>
      <div className="search">
        <Search />
        <p>Search</p>
      </div>
      <div className="nav">
        <div className="top">
          <div className="items">
            {[
              {
                icon: <Dashboard />,
                name: "Dashboard",
              },
              {
                icon: <Customer />,
                name: "Customer",
              },
              {
                icon: <Report/>,
                name:"All report",
              },
              {
                icon: <Geography/>,
                name: "Geography",
              },
              {
                icon: <Conversations/>,
                name: "Conversations",
              },
              {
                icon: <Deals/>,
                name:  "Deals",
              },
              {
                icon: <Export/>,
                name: "Export",
              }
            ].map((el) => {
              return (
                <div className="item">
                  {el.icon}
                  <p>{el.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bottom">
          <div className="profile">
            <Profile />
            <div>
              <p className="name">Gustavo Xavier</p>
              <div className="chip">
                <p>Admin</p>
              </div>
            </div>
          </div>

          <div className="item">
            <Setting />
            <p>setting</p>
          </div>

          <div className="item">
            <Logout />
            <p style={{ color: "#B01212" }}>logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
