import React from "react";
import styles from "./Logo.module.css";
import LogoCompany from "../../assets/images/logo-company.svg";
import { ReactSVG } from "react-svg";

const Logo = ({ className }) => {
  return (
    <a href="./">
      {/* <img src={logo} className={styles.logo} alt="logo INC4" /> */}
      <ReactSVG className={`{styles.logo} ${className}`} src={LogoCompany} />
    </a>
  );
};

export default Logo;
