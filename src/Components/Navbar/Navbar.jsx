import React from "react";
import "./style.css";
const Navbar = ({ changePage }) => {
  return (
    <div className="navbar">
      <p id="1" onClick={changePage}>
        سوال اول
      </p>
      <p id="2" onClick={changePage}>
        سوال دوم
      </p>
      <p id="3" onClick={changePage}>
        سوال سوم
      </p>
      <p id="4" onClick={changePage}>
        سوال چهارم
      </p>
      <p id="5" onClick={changePage}>
        سوال پنجم
      </p>
      <p id="6" onClick={changePage}>
        سوال ششم
      </p>
      <p id="7" onClick={changePage}>
        سوال هفتم
      </p>
      <p id="8" onClick={changePage}>
        سوال هشتم
      </p>
    </div>
  );
};

export default Navbar;
