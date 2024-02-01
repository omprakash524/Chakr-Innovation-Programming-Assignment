import { ReactComponent as Increase } from "../../assests/icons/increase.svg";
import { ReactComponent as Arrow } from "../../assests/icons/arrow.svg";
import { ReactComponent as Person } from "../../assests/chats/person.svg";

import "./style.css";

function Chats() {
  return (
    <div className="widget-chat">
      <div>
        <p className="heading chat">Chats</p>
        <div className="remark">2 unread messages</div>
      </div>
      <div className="chat-footer">
        <div className="selected">
          <Person />
        </div>
        <div className="selected">
          <Person />
        </div>
        <div className="not-selected">
          <Person />
        </div>
        <div className="not-selected">
          <Person />
        </div>
      </div>
    </div>
  );
}

export default Chats;
