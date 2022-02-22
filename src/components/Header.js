import React from "react";
import icon from "../assets/icon.svg";

function Header() {
  return (
    <div>
      <div className="header container-fluid">
        <div className="setting">
          <div className="d-flex container-custom">
            <img src={icon} alt="pic" className="profile-pict" />
            <div className="greeting">
              <p>
                Good Morning <br />
                <span>Fellas</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
