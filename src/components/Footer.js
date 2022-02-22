import React from "react";

function Footer() {
  return (
    <div>
      <div className="done">
        <div className="setting">
          <div className="container-custom">
            <h3>You're all set.</h3>
            <p>
              The wise man therefore always holds in these matters to this
              principle of selection.
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="setting container-custom d-flex justify-content-between">
          <p className="copyright">
            <span>wknd</span>@2020
          </p>
          <div>
            <p className="version rounded-pill">alpha version 1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
