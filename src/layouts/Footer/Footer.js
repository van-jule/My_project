import React from "react";
import { ReactSVG } from "react-svg";
import styles from "./Footer.module.css";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Clutch from "../../assets/images/clutch.svg";
import Button from "../../components/Button";
import LinkedIn from "../../assets/images/linkedIn.svg";
import Twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className={styles.flexbox}>
        <div className={styles.wrap}>
          <Logo className={styles.footerLogo} />
          <div className={styles.socials}>
            <ReactSVG className={styles.socialsIcon} src={Clutch} />
            <ReactSVG className={styles.socialsIcon} src={LinkedIn} />
            <ReactSVG className={styles.socialsIcon} src={Twitter} />
          </div>
          <p>&copy; 2021 INC4 BLOCKCHAIN ENGINEERING. ALL RIGHTS RESERVED.</p>
        </div>
        <div className={styles.formWrap}>
          <form className={styles.form}>
            <p className={styles.formText}>Stay up to date with INC4</p>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={styles.input}
            />
            <Button
              type="submit"
              className={styles.subscribeButton}
              buttonText="Subscribe"
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
