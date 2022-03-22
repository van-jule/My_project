import React from "react";
import styles from "./Button.module.css";
import { ReactSVG } from "react-svg";

const Button = ({ buttonText, iconSrc, className, type = "button" }) => {
  return (
    <>
      <button type={type} className={`${styles.button} ${className} `}>
        {buttonText}
        {iconSrc && <ReactSVG className={styles.icon} src={iconSrc} />}
      </button>
    </>
  );
};

export default Button;
