import React from "react";

const CardUser = ({ userData }) => {
  return (
    <div className="carduser">
      <div className="carduser__content">
        <i className="bx bxs-user-check carduser__icon"></i>
        <p>{userData.username}</p>
      </div>
    </div>
  );
};

export default CardUser;
