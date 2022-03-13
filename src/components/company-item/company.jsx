import React from "react";
import "./company.scss";

function Company({ company }) {
  return (
    <div className="company">
      <a href="###" className="company__img">
        <img src={company.img} alt="" />
      </a>
      <div className="company__info">
        <div className="company__info-top">
          <a href="###" className="company__info-name">
            {company.name}
          </a>
          <p className="company__info-currency">{company.currency}</p>
        </div>
        <div className="company__info-bottom">
          <p className="company__info-service">{company.service}</p>
          <p className="company__info-date">{company.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Company;
