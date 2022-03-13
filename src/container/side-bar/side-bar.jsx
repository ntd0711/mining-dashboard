import React from "react";
import MenuItem from "../../components/menu-item/menu-item";

import "./side-bar.scss";

import logo from "../../images/logo.png";
import { BsFillPhoneFill } from "react-icons/bs";
import { RiMacbookFill } from "react-icons/ri";
import { AiFillHome, AiFillWallet } from "react-icons/ai";
import DeviceItem from "../../components/device-item/device-item";
import { FaGlobe, FaNewspaper } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { GrClose } from "react-icons/gr";
import avatar1 from "../../images/Avatar.png";
import ProfileItem from "../../components/profile-item/profile-item";

function Sidebar({ onClose }) {
  const categories = [
    { name: "Dashboard", icon: <AiFillHome /> },
    { name: "Wallet", icon: <AiFillWallet /> },
    { name: "Statistics", icon: <SiSimpleanalytics /> },
    { name: "Transactions", icon: <FaGlobe /> },
    { name: "Exchange", icon: <AiFillShop /> },
    { name: "News", icon: <FaNewspaper /> },
  ];

  const devices = [
    { name: "Iphone 6s Plus", icon: <BsFillPhoneFill /> },
    { name: "Macbook 2017", icon: <RiMacbookFill /> },
  ];

  const users = [{ name: "Mike Taylor", avatar: avatar1 }];

  return (
    <div className="sidebar">
      <div onClick={onClose} className="sidebar__close">
        <GrClose />
      </div>
      <div className="logo">
        <img src={logo} alt="" /> <span className="logo__text">Mine&Shine</span>
      </div>
      <div className="menu">
        <ul className="menu__list">
          {categories.map((category, index) => (
            <MenuItem key={index} category={category} />
          ))}
        </ul>
      </div>
      <div className="active__device">
        <h3 className="active__device-heading">Active device</h3>
        <div className="active__device-list">
          {devices.map((device, index) => (
            <DeviceItem key={index} device={device} />
          ))}
        </div>
      </div>
      <div className="profile">
        <div className="profile__list">
          {users.map((user, index) => (
            <ProfileItem key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
