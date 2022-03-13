import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import Company from "../../components/company-item/company";
import Currency from "../../components/currency-item/currency";
import MiningItem from "../../components/mining-item/mining-item";
import SecurityItem from "../../components/security-item/security-item";
import bg_hero from "../../images/Bg-Elements.png";
import bitcoin_logo from "../../images/bitcoin-logo.png";
import citibankImg from "../../images/citibank.png";
import CPUIcon from "../../images/cpu.png";
import facebookImg from "../../images/facebook.png";
import foodPandaImg from "../../images/foodpanda.png";
import GPUIcon from "../../images/gpu.png";
import uberImg from "../../images/uber.png";
import USDIcon from "../../images/usd.png";
import vodafoneImg from "../../images/vodafone.png";
import "./contents.scss";

function Contents({ menuBtnRef, onShow }) {
  const currencies = [
    {
      name: "BTC/USD",
      number: "$18 928.15",
      icon: <FiArrowUpLeft />,
      color: "#E3E0FF",
    },
    {
      name: "ETH/USD",
      number: "$591.8874",
      icon: <FiArrowUpLeft />,
      color: "#D7F8E8",
    },
    {
      name: "XRP/USD",
      number: "$0.61688",
      icon: <FiArrowUpLeft />,
      color: "#DAE3F7",
    },
    {
      name: "Litecoin/USD",
      number: "$87.9917",
      icon: <FiArrowUpRight />,
      color: "#F0EDEA",
    },
  ];

  const companies = [
    {
      name: "Foodpanda",
      img: foodPandaImg,
      service: "Meal",
      date: "10:00 PM",
      currency: "- $15.85",
    },
    {
      name: "Vodafone",
      img: vodafoneImg,
      service: "Phone",
      date: "04:13 PM",
      currency: "- $58",
    },
    {
      name: "Facebook",
      img: facebookImg,
      service: "Salary",
      date: "11:45 AM",
      currency: "+ $7000",
    },
    {
      name: "Uber Premier",
      img: uberImg,
      service: "Transport",
      date: "8:30 AM",
      currency: "- $8.75",
    },
    {
      name: "Citi Bank ",
      img: citibankImg,
      service: "Credited",
      date: "8:30 AM",
      currency: "- $2,318.75",
    },
  ];

  const securities = [
    { title: "Identity", status: "on" },
    { title: "Phone", status: "on" },
    { title: "Phone", status: "off" },
    { title: "Identity", status: "on" },
  ];

  const minings = [
    { title: "GPUs mining", status: "on", icon: GPUIcon, type: "GPU" },
    { title: "CPUs mining", status: "on", icon: CPUIcon, type: "CPU" },
    { title: "CPUs mining", status: "on", icon: CPUIcon, type: "GPU" },
    { title: "CPUs mining", status: "on", icon: CPUIcon, type: "CPU" },
  ];

  return (
    <div className="main">
      <div ref={menuBtnRef} onClick={onShow} className="sidebar__open">
        <AiOutlineMenu />
      </div>

      <div className="main__top">
        <div className="overview">
          <h3 className="heading__small overview__heading">Overview</h3>
          <div className="overview__wrapper">
            <div className="overview__hero">
              <div className="overview__logo">
                <img src={bitcoin_logo} alt="" />
              </div>
              <div className="overview__bg-hero">
                <img src={bg_hero} alt="" />
              </div>
              <div className="overview__hero-top">
                <div className="overview__statistic">
                  <h3 className="overview__statistic-heading">
                    Available balance in USD
                  </h3>
                  <p className="overview__statistic-sum">134,510.15</p>
                  <div className="overview__statistic-group">
                    <div className="overview__statistic-column">
                      <h3>Transactions</h3>
                      <p>34,405</p>
                    </div>
                    <div className="overview__statistic-column">
                      <h3>Wallets</h3>
                      <p>23</p>
                    </div>
                  </div>
                  <p className="overview__statistic-date">
                    Last activity at 21 May, 2021
                  </p>
                </div>
              </div>
              <div className="overview__hero-bottom">
                <div className="overview__crypto">
                  <div className="overview__crypto-card">
                    <p className="overview__crypto-heading">NioWallet</p>
                    <p className="overview__crypto-number">
                      4.434953<span>NIO</span>
                    </p>
                    <p className="overview__crypto-iconBitcoin">
                      <FaBitcoin />
                    </p>
                  </div>
                  <div className="overview__crypto-card">
                    <p className="overview__crypto-heading">Ethereum Wallet</p>
                    <p className="overview__crypto-number">
                      0.000298<span>ETH</span>
                    </p>
                    <p className="overview__crypto-icon">
                      <FaEthereum />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview__market">
              {currencies.map((currency, index) => (
                <Currency key={index} currency={currency} />
              ))}
            </div>
            <div className="overview__companies">
              {companies.map((company, index) => (
                <Company key={index} company={company} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="main__bottom">
        <div className="security">
          <h3 className="heading__small security__heading">Security</h3>
          <div className="security__list">
            {securities.map((security, index) => (
              <SecurityItem key={index} security={security} />
            ))}
          </div>
        </div>
        <div className="mining__status">
          <h3 className="heading__small mining__status-heading">
            Mining Status
          </h3>
          <div className="mining__status-wrapper">
            <div className="mining__status-left">
              {minings.map((mining, index) => (
                <MiningItem key={index} mining={mining} />
              ))}
            </div>
            <div className="mining__status-right">
              <div className="mining__status-card">
                <div className="mining__status-img box__shadow-blue">
                  <img src={USDIcon} alt="" />
                </div>
                <div className="mining__status-daily">
                  <p className="mining__status-daily-heading">Est. daily USD</p>
                  <p className="mining__status-daily-number">$25.03</p>
                </div>
              </div>
              <div className="mining__status-card">
                <div className="mining__status-img box__shadow-blue">
                  <img src={USDIcon} alt="" />
                </div>
                <div className="mining__status-daily">
                  <p className="mining__status-daily-heading">Est. daily USD</p>
                  <p className="mining__status-daily-number">$25.03</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contents;
