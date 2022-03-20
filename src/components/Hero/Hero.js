import React from "react";
import styles from "./Hero.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";
import ArrowIcon from "../../assets/images/vector.svg";
import Icon from "../../assets/images/icon.svg";
import Copy from "../../assets/images/copy.svg";
import { ReactSVG } from "react-svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <h1 className={styles.title}>
          Earn up to 11% while you sleep <br /> Stake with us
        </h1>
        <div className={styles.linkWrap}>
          <a
            className={styles.logoCircle}
            href="./"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to NEAR protocol"
          >
            <ReactSVG className={styles.logoIcon} src={Icon} />
          </a>
          <p>NEAR Protocol</p>
          <button className={styles.logoButton} type="button">
            NEAR
          </button>
        </div>
        <p className={styles.validatorName}>Validator Address</p>
        <div className={styles.validatorLink}>
          {/* <input
            className={styles.input}
            type="text"
            value="7jfeca09ghjy0562460252072fd8438f0hjy6ef5a2077583a97226"
            readOnly
          /> */}
          <p className={styles.copyText}>
            7jfeca09ghjy0562460252072fd8438f0hjy6ef5a2077583a97226
          </p>
          <button type="button" className={styles.copyButton}>
            <ReactSVG className={styles.copyIcon} src={Copy} />
          </button>
        </div>
        <ul className={styles.list}>
          <li>
            <h3>Every epoch (~12 hours)</h3>
            <p>Payout Frequency</p>
          </li>
          <li>
            <h3>~11%</h3>
            <p>Expected Reward Rate</p>
          </li>
          <li>
            <h3>7%</h3>
            <p>Commission</p>
          </li>
        </ul>
      </Container>

      <div className={styles.wrap}>
        <span className={styles.left}></span>
        <Button
          buttonText="Stake now"
          className={styles.heroButton}
          iconSrc={ArrowIcon}
        />

        <span className={styles.right}></span>
      </div>
    </div>
  );
};

export default Hero;
