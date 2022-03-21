import React from "react";
import Container from "../Container";
import styles from "./FAQ.module.css";
import { ReactSVG } from "react-svg";
import Plus from "../../assets/images/plus.svg";
import Minus from "../../assets/images/minus.svg";

const FAQ = () => {
  return (
    <div className={styles.section}>
      <Container>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <ul>
          <li className={styles.item}>
            <button type="button" className={styles.button}>
              {/* {<ReactSVG className={styles.plus} src={Plus} />} */}
              {<ReactSVG className={styles.minus} src={Minus} />}
            </button>
            <div className={styles.textWrap}>
              <h2 className={styles.subtitle}>What is NEAR?</h2>
              <p className={styles.text}>
                NEAR is a decentralized application platform that focuses on
                developer and user-friendliness. It is a Proof-of-Stake
                blockchain that uses sharing technology to achieve scalability.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <button type="button" className={styles.button}>
              {<ReactSVG className={styles.plus} src={Plus} />}
              {/* {<ReactSVG className={styles.minus} src={Minus} />} */}
            </button>
            <div className={styles.textWrap}>
              <h2 className={styles.subtitle}>What is delegation?</h2>
              {/* <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                pariatur numquam dignissimos tenetur dolore, beatae magni amet
                ullam non hic.
              </p> */}
            </div>
          </li>
          <li className={styles.item}>
            <button type="button" className={styles.button}>
              {<ReactSVG className={styles.plus} src={Plus} />}
              {/* {<ReactSVG className={styles.minus} src={Minus} />} */}
            </button>
            <div className={styles.textWrap}>
              <h2 className={styles.subtitle}>Why should I delegate NEAR?</h2>
              {/* <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                est incidunt dolorem cupiditate vel? Possimus facere autem,
                vitae vel quaerat quam officiis nihil, deleniti corrupti velit
                dolores laborum repellendus veniam, error fuga ad molestiae
                asperiores provident iure odio accusantium accusamus perferendis
                explicabo quas! Cupiditate impedit asperiores minus nisi,
                delectus doloremque!
              </p> */}
            </div>
          </li>
          <li className={styles.item}>
            <button type="button" className={styles.button}>
              {<ReactSVG className={styles.plus} src={Plus} />}
              {/* {<ReactSVG className={styles.minus} src={Minus} />} */}
            </button>
            <div className={styles.textWrap}>
              <h2 className={styles.subtitle}>
                What happens to my NEAR tokens after the delegation is
                completed?{" "}
              </h2>
              {/* <p className={styles.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
                sunt.
              </p> */}
            </div>
          </li>
          <li className={styles.item}>
            <button type="button" className={styles.button}>
              {<ReactSVG className={styles.plus} src={Plus} />}
              {/* {<ReactSVG className={styles.minus} src={Minus} />} */}
            </button>
            <div className={styles.textWrap}>
              <h2 className={styles.subtitle}>
                When will I start to earn rewards?{" "}
              </h2>
              {/* <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ad eius, facilis, nisi tempore quia voluptas quo dolore ducimus
                accusamus nulla rem aut eligendi placeat eos autem deleniti,
                neque itaque!{" "}
              </p> */}
            </div>
          </li>
          <li className={styles.item}>
            <button type="button" className={styles.button}>
              {<ReactSVG className={styles.plus} src={Plus} />}
              {/* {<ReactSVG className={styles.minus} src={Minus} />} */}
            </button>
            <div className={styles.textWrap}>
              <h2 className={styles.subtitle}>
                How long does NEAR unbonding period take?
              </h2>
              {/* <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                est incidunt dolorem cupiditate vel? Possimus facere autem,
                vitae vel quaerat quam officiis nihil, deleniti corrupti velit
                dolores laborum repellendus veniam, error fuga ad molestiae
                asperiores provident iure odio accusantium accusamus perferendis
                explicabo quas! Cupiditate impedit asperiores minus nisi,
                delectus doloremque!
              </p> */}
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default FAQ;
