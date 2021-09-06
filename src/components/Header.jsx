import React from "react";
import moon from '../assets/images/icon-moon.svg';
import sun from "../assets/images/icon-sun.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1>todo</h1>
        </div>
        <div className="header__theme">
          <button type="button" aria-label="switch theme">
            <img src={sun} alt="light mode" />
            {/* <img src={moon} alt="dark mode" /> */}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
