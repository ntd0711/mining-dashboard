import React from "react";
import "./profile-item.scss";
import { GoPrimitiveDot } from "react-icons/go";

function ProfileItem({ user }) {
  return (
    <div className="profile__item">
      <div className="profile__avatar">
        <img src={user.avatar} alt="" />
      </div>
      <div className="profile__info">
        <p className="profile-name">{user.name}</p>
        <p className="profile-status">
          <span className="profile-status-icon">
            <GoPrimitiveDot />
          </span>
          <span className="status__text">Online</span>
        </p>
      </div>
    </div>
  );
}

export default ProfileItem;
