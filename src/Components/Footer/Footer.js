import React from "react";
import logogithub from "./../../Logos/images/logo-github.svg";
import logolinkedin from "../../Logos/images/logo-linkedin.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>Copyright @ 2022. Powered by Edita Barkauskaitė </p>
      <a
        href="https://github.com/Edetuke"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className={classes.logo} src={logogithub} alt="logo-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/edita-barkauskait%C4%97/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className={classes.logo} src={logolinkedin} alt="logolinkedin" />
      </a>
    </div>
  );
};

export default Footer;
