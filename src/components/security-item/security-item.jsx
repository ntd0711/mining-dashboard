import React from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import "./security-item.scss";

function SecurityItem({ security }) {
  return (
    <div className="security__card">
      <div className="security__card-info">
        <p className="security__card-heading">{security.title}</p>
        <p className="security__card-status">
          {security.status === "on" ? "Enable" : "Disable"}
        </p>
      </div>
      <p
        className={
          security.status === "on" ? "switch__button-on" : "switch__button-off"
        }
      >
        {security.status === "on" ? <BsToggleOn /> : <BsToggleOff />}
      </p>
    </div>
  );
}

export default SecurityItem;
