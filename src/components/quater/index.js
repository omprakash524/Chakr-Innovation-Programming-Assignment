import React from "react";

import { ReactComponent as QuaterPercent } from "../../assests/icons/quaterPercent.svg";

import { ReactComponent as Arrow } from "../../assests/icons/arrow.svg";

import "./style.css";

function Quater() {
  return (
    <div className="widget-3">
      <div>
        <p className="heading">Quarter goal</p>
        <QuaterPercent />
      </div>
      <div className="footer">
        <p>Revenues report</p>
        <Arrow />
      </div>
    </div>
  );
}

export default Quater;
