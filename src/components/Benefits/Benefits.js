import React from "react";
import Container from "../Container";
import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={styles.section}>
      <Container>
        <h2 className={`${styles.title} ${styles.visuallyHidden}`}>Benefits</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>Uptime >99,98%</h3>
            <p className={styles.text}>
              Highly available infrastructure with alerts and monitoring
            </p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>Personal assistance</h3>
            <p className={styles.text}>
              Personal assistance, nominated account manager with rapid response
            </p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>Support 24/7</h3>
            <p className={styles.text}>
              Professional DevOps team providing 24/7 support
            </p>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Benefits;
