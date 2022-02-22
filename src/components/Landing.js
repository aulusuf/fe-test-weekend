import React from "react";
import lego from "../assets/lego.svg";

function Landing(props) {
  return (
    <div className="landing">
      <div
        className="landing-content setting"
        style={{
          backgroundPosition: `top left ${
            119 - (1366 - props.width) / 2
          }px, top 263px left ${
            403 - (1366 - props.width) / 2
          }px, center top, top 293px right ${161 - (1366 - props.width) / 2}px`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <h1>WEEKEND FROM HOME</h1>
        <p>Stay active with a little workout.</p>
        <div className="lego container-custom">
          <img src={lego} alt="lego" className="d-flex mx-auto image" />
          <div className="clickme d-flex">
            <button className="btn btn-light mx-auto">Let's Go</button>
          </div>
        </div>
        <div className="definition">
          <div className="definition-content">
            <div className="container-custom">
              <p>
                <span>Deffinition;</span> a practice or exercise to test or
                improve one's fitness for athletic competition, ability, or
                performance to exhaust (something, such as a mine) by working to
                devise, arrange, or achieve by resolving difficulties.
                <br />
                Merriam-Webster.com Dictionary.
              </p>

              <p className="caption-by">-weekend team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
