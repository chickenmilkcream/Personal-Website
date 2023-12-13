import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import amongUs from "./json/amongUs.json";
import stars from "./json/stars.json";
import snow from "./json/snow.json";
import nyanCat from "./json/nyanCat.json";

import React, { useState } from "react";
import { Header, Resume } from "./components";
import style from "./App.module.scss";
import Toggler from "./containers/toggler/Toggler";
import Scroller from "./containers/scroller/Scroller";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? style.dark : style.light}>
      <body>
        <Toggler darkMode={darkMode} handleClick={handleClick} />
        <div className={style.main}>
          <div className={style.header}>
            <Header />
          </div>
          <div className={style.resume}>
            <Resume />
          </div>
          <p className={style.signature}>
            Made with ♥ by{" "}
            <a href="https://www.linkedin.com/in/amy-p/"> Amy Peng</a>
          </p>{" "}
        </div>
        <Scroller />
      </body>

      {darkMode && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={stars}
          className={style.particles}
        />
      )}

      {!darkMode && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={snow}
          className={style.particles}
        />
      )}
    </div>
  );
}

export default App;
