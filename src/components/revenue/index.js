import { ReactComponent as Increase } from "../../assests/icons/increase.svg";
import { ReactComponent as Arrow } from "../../assests/icons/arrow.svg";

function Revenue() {
  return (
    <div className="widget-1">
      <div>
        <p className="heading">Reveneue</p>

        <div className="number-container">
          <p className="number"> 15 %</p>
          <Increase />
        </div>
        <div className="remark">Increase compared to last week</div>
      </div>
      <div className="footer">
        <p>Revenues report</p>
        <Arrow />
      </div>
    </div>
  );
}

export default Revenue;
