import { ReactComponent as Plus } from "../../assests/chats/plus.svg";

import "./style.css";

function Deals() {
  return (
    <div className="widget-chat">
      <div>
        <p className="heading chat">Top deals</p>
      </div>
      <div className="deal-footer">
        {[
          "Fruit2Go",
          "Marshall's MKT",
          "CCNT",
          "Joana Mini-market",
          "Little Brazil Vegan",
          "Target",
          "Organic Place",
          "Morello's",
        ].map((name) => {
          return (
            <div className="chip">
              <Plus />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deals;
