import React from "react";
import { useNavigate } from "react-router-dom";

const AccountData = ({ isShow, setIsShow, userData }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    setIsShow(!isShow);
    navigate("/login");
  };
  return (
    <div className={`account-data account-data--${isShow ? "show" : "hiden"}`}>
      <i
        className="bx bxs-user-circle"
        style={{
          fontSize: "1.5rem",
        }}
      ></i>
      <br />
      <small>{userData.username}</small>
      <br />
      <small>{userData.email}</small>
      <br />
      <small className="account-data__logout" onClick={logout}>
        Cerrar sesión
      </small>
    </div>
  );
};

export default AccountData;
