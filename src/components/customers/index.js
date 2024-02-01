import { ReactComponent as Person } from "../../assests/chats/person.svg";

import "./style.css";

function Customers() {
  return (
    <div className="customers">
      <div className="containers">
        <p className="heading">Customers</p>
        <p className="subheading"> Sort by Newest</p>
      </div>
      {["", "", "", ""].map(() => {
        return (
          <div className="footer">
            <Person />
            <div>
              <p className="heading">Chris Friedkly</p>
              <p className="sub-heading">Supermarket</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Customers;
