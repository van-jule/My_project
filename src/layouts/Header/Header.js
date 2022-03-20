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
          <Logo />
          <Button buttonText="Stake now" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
