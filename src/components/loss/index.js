import { ReactComponent as Increase } from "../../assests/icons/increase.svg";
import { ReactComponent as Arrow } from "../../assests/icons/arrow.svg";

function Loss() {
  return (
    <div className="widget-1">
      <div>
        <p className="heading">Lost deals</p>

        <div className="number-container">
          <p className="number"> 14 %</p>
        </div>
        <div className="remark">You closed 96 out of 100 deals</div>
      </div>
      <div className="footer">
        <p>All deals</p>
        <Arrow />
      </div>
    </div>
  );
}

export default Loss;
