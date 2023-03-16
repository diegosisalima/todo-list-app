import React from "react";
import { useNavigate } from "react-router-dom";

const PreviousLink = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="previouslink flex-center cursor" onClick={handleClick}>
      <i class="bx bx-chevrons-left previouslink__icon"></i>Regresar
    </div>
  );
};

export default PreviousLink;
