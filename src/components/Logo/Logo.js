import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <div>
      <a href="./" className={styles.logo}>
        <img src={logo} className={styles.logo} alt="logo INC4" />
      </a>
    </div>
  );
};

export default Logo;
