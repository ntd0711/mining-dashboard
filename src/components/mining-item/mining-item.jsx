import React from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import "./mining-item.scss";

function MiningItem({ mining }) {
  return (
    <div className="mining__status-card">
      <div
        className={`mining__status-img ${
          mining.type === "GPU" ? "box__shadow-yellow" : "box__shadow-orange"
        }`}
      >
        <img src={mining.icon} alt="" />
      </div>
      <div className="mining__status-card-right">
        <div>
          <p className="mining__status-card-heading">{mining.title}</p>
          <p className="mining__status-card-status">
            {mining.status === "on" ? "Running" : "Off"}
          </p>
        </div>
        <p
          className={
            mining.status === "on" ? "switch__button-on" : "switch__button-off"
          }
        >
          {mining.status === "on" ? <BsToggleOn /> : <BsToggleOff />}
        </p>
      </div>
    </div>
  );
}

export default MiningItem;
