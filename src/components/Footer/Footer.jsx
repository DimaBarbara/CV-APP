import React from "react";
import s from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <small className={s.small}>
        Copyright &copy; {new Date().getFullYear()} Barbara Dmytro
      </small>
      <a className={s.a} href="https://github.com/DimaBarbara/CV-APP">
        <img
          className={s.img}
          src="https://cdn-icons-png.freepik.com/512/14079/14079340.png"
          alt="Icon"
        />
      </a>
    </footer>
  );
};

export default Footer;
