import React from "react";
import styles from "./About.module.css";
import Container from "../Container";
import { ReactSVG } from "react-svg";
import MainLogo from "../../assets/images/mainLogoNEAR.svg";

const About = () => {
  return (
    <div className={styles.section}>
      <Container>
        <h2 className={`${styles.title} ${styles.visuallyHidden}`}>About</h2>
        <div className={styles.wrap}>
          <p className={styles.text}>
            NEAR is a decentralized application platform that focuses on
            developer and user-friendliness. It is a Proof-of-Stake blockchain
            that uses sharing technology to achieve scalability.
          </p>
          <ReactSVG className={styles.mainLogo} src={MainLogo} />
        </div>{" "}
      </Container>
    </div>
  );
};

export default About;
