import React, { useState, useEffect } from "react";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import darkBackground from "../assets/images/bg-desktop-dark.jpg";
import lightBackground from "../assets/images/bg-desktop-light.jpg";

const Header = () => {
  const [theme, setTheme] = useState(true);

  //TODO: ==========>> Toggle the body class and container image depending on the theme state
  useEffect(() => {
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    if (theme) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      container.style.backgroundImage = `url(${lightBackground})`;
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      container.style.backgroundImage = `url(${darkBackground})`;
    }
  });

  //TODO: ==========>> Get theme state from local storage on first load
  useEffect(() => {
    const newTheme = localStorage.getItem("localTheme");
    setTheme(JSON.parse(newTheme));
  }, []);

  //TODO: ==========>> Save theme state to local storage
  useEffect(() => {
    localStorage.setItem("localTheme", JSON.stringify(theme));
  });

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h1>todo</h1>
        </div>
        <div className="header__theme">
          <button
            type="button"
            aria-label="switch theme"
            onClick={() => {
              setTheme(!theme);
            }}
          >
            {!theme ? (
              <img src={sun} alt="light mode" />
            ) : (
              <img src={moon} alt="dark mode" />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
