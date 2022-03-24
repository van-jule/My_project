import React from "react";
import styles from "./Header.module.css";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Container from "../../components/Container";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.container}>
          <Logo className={styles.headerLogo} />
          <Button buttonText="Stake now" className={styles.headerButton} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
