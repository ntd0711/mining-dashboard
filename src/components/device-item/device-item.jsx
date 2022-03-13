import React from "react";
import "./device-item.scss";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";

function DeviceItem({ device }) {
  return (
    <div className="active__device-item">
      <div className="active__device-icon">{device.icon}</div>
      <div className="active__device-info">
        <p className="active__device-name">{device.name}</p>
        <p className="active__device-status">
          <span className="active__device-status-icon">
            <GoPrimitiveDot />
          </span>
          <span className="status__text">Active</span>
        </p>
      </div>
      <div className="active__device-action">
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
}

export default DeviceItem;
