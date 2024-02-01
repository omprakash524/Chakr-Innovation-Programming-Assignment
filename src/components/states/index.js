import { ReactComponent as NY } from "../../assests/states/NY.svg";
import { ReactComponent as MA } from "../../assests/states/MA.svg";
import { ReactComponent as NH } from "../../assests/states/NH.svg";

import "./style.css";

function States() {
  return (
    <div className="widget-chat">
      <div>
        <p className="heading chat">Top states</p>
      </div>
      <div className="state-footer">
        <NY />
        <MA />
        <NH />
      </div>
    </div>
  );
}

export default States;
