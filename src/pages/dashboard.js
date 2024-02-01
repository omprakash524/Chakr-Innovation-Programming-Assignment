import React from "react";
import Sidebar from "../components/sidebar";
import "./style.css";

import Revenue from "../components/revenue";
import Loss from "../components/loss";
import Quater from "../components/quater";
import Chats from "../components/chats";
import States from "../components/states";
import Deals from "../components/deals";

import Customers from "../components/customers";
import Growth from "../components/growth";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <Sidebar />
      </div>
      <div className="body">
        <div className="container">
          <div className="row1">
            {/* Revenue Widget */}

            <Revenue />
            <Loss />
            <Quater />
          </div>
          <div className="row1">
            <Customers />
            <Growth />
          </div>
          <div className="row1">
            <Chats />
            <States />
            <Deals />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
