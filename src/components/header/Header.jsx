import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>wtf wtf</h1>
        <h5 className="text-light">FullStack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me"></img>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
