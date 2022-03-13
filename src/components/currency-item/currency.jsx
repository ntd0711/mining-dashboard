import React from "react";
import "./currency.scss";

function Currency({ currency }) {
  return (
    <div className="currency" style={{ backgroundColor: `${currency.color}` }}>
      <p className="currency__name">{currency.name}</p>
      <p className="currency__number">
        {currency.number}
        <span className="currency__arrow">{currency.icon}</span>
      </p>
    </div>
  );
}

export default Currency;
