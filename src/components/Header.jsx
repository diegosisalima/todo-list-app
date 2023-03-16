import React, { useState } from "react";
import AccountData from "./AccountData";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ userData }) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    if (userData?.hasOwnProperty("username")) {
      setIsShow(!isShow);
    } else {
      navigate("/sign-up");
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <h3>TODO LIST</h3>
      </Link>
      <section className="header__account">
        <p onClick={() => navigate("/acerca")} style={{ cursor: "pointer" }}>
          acerca
        </p>
        <p onClick={handleClick} style={{ cursor: "pointer" }}>
          account
        </p>
      </section>
      <AccountData isShow={isShow} setIsShow={setIsShow} userData={userData} />
    </header>
  );
};

export default Header;
