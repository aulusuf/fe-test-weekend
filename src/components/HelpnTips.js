import React, { useState, useEffect } from "react";
import axios from "axios";

function HelpnTips(props) {
  const [helpntips, getHelpnttips] = useState();

  useEffect(() => {
    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((res) => {
        getHelpnttips(res.data);
      });
  }, []);
  return (
    <div
      className="helpntips"
      style={{
        backgroundPosition: `top right ${127 - (1366 - props.width) / 2}px`,
      }}
    >
      <h3>Help & Tips</h3>
      <div className="item-display">
        {helpntips &&
          helpntips.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img
                  src={item.image}
                  alt="list-1"
                  width="311px"
                  height="176px"
                />
                <div className="item-desc">
                  <h5>{item.title}</h5>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HelpnTips;
