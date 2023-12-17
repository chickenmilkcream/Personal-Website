import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
// import { Button } from "./Styles";
import style from "./Scroller.module.scss";

const Scroller = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) { /* this set visible thing is lowkey not working */
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible); 

  return (
    <div className={style.scrollerButton}>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default Scroller;
