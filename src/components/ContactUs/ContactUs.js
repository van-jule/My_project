import React from "react";
import Container from "../Container";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.section}>
      <Container>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.text}>
          If you have any questions about staking or our validator services,
          please do not hesitate to reach out to us. We are happy to help...
        </p>
        <form className={styles.form}>
          <div className={styles.formWrap}>
            <input
              type="text"
              className={`${styles.formInput} ${styles.nameInput}`}
              name="user-name"
              id="name"
            />
            <label for="name" className={styles.formLabel}>
              Name
            </label>
          </div>
          <div className={styles.formWrap}>
            <input
              type="email"
              className={`${styles.formInput} ${styles.emailInput}`}
              name="email"
              id="email"
            />
            <label for="email" className={styles.formLabel}>
              Email
            </label>
          </div>
          <textarea
            className={styles.textInput}
            name="question"
            id="question"
            cols="80"
            rows="6"
            placeholder="How can I help you ?"
          ></textarea>
        </form>
      </Container>
    </div>
  );
};

export default ContactUs;
