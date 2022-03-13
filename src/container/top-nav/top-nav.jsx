import React from "react";
import "./top-nav.scss";
import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import NavbarItem from "../../components/navbar-item/navbar-item";
import { FiSearch } from "react-icons/fi";
import { IoLeaf } from "react-icons/io5";
import { SiBinance } from "react-icons/si";
import {
  GiBoatPropeller,
  GiEagleEmblem,
  GiFlatPawPrint,
  GiBullHorns,
} from "react-icons/gi";

function TopNav() {
  const categories = [
    <FaEthereum />,
    <BiBitcoin />,
    <IoLeaf />,
    <GiBoatPropeller />,
    <GiEagleEmblem />,
    <GiFlatPawPrint />,
    <GiBullHorns />,
  ];

  return (
    <div className="navbar">
      <div className="navbar__right">
        <h2 className="heading__large">Welcome To Dashboard</h2>
        <ul className="navbar__categories">
          {categories.map((category, index) => (
            <NavbarItem key={index} category={category} />
          ))}
        </ul>
      </div>
      <div className="navbar__left">
        <h2 className="heading__large">Search</h2>
        <form action="javascript:void(0)" className="navbar__form">
          <input
            className="navbar__input"
            placeholder="Enter Search Term"
            type="text"
          />
          <button type="submit" className="navbar__button">
            <FiSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TopNav;
