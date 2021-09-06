import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1>todo</h1>
        </div>
        <div className="header__theme">
          <button>toggle</button>
        </div>
      </header>
    </>
  );
};

export default Header;
