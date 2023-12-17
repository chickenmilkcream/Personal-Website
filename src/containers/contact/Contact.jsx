import React from 'react'
import style from './Contact.module.scss';

const Contact = () => {
  return (
    <div id="contact" className={style.contact}>
      <h2>Contact</h2>
      <ul>
        <li>
          <i class="fa-solid fa-location-dot"></i>
          <span>Toronto</span>
        </li>
        <li>
          <i class="fa-brands fa-linkedin"></i>
          <span>
            <a
              href="https://www.linkedin.com/in/amy-p/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
          </span>
        </li>
        <li>
          <i class="fa fa-envelope"></i>
          <span>
            <a href="mailto: zhiting.peng@mail.utoronto.ca">Email</a>{" "}
          </span>
        </li>
        <li>
          <i class="fa-brands fa-github"></i>
          <span>
            <a
              href="https://github.com/chickenmilkcream"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
          </span>
        </li>
        <li>
          <i class="fa-brands fa-square-instagram"></i>
          <span>
            <a
              href="https://www.instagram.com/a.penguinn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
          </span>
        </li>
        <li>
          <i class="fa-solid fa-file"></i>
          <span>
            <a
              href="https://drive.google.com/file/d/1Mlh_uOJewq69PD0j0phzaHYeESdeNff0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            /
            <a
              href="https://drive.google.com/file/d/1QHUP65DpLh9k-Rj-rxu7IpGw_ieX9P_o/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>{" "}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Contact