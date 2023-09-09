import React from "react";
import styles from "./hero.module.css";
import { Link } from "react-router-dom";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImage from "../../images/HeroImage.png";
import HeroBgAnimation from "../HeroBgAnimation";

const Hero = () => {
  return (
    <div id={styles.about}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBg}>
          <HeroBgAnimation />
        </div>
        <div className={styles.heroInnerContainer}>
          <div className={styles.heroLeftContainer}>
            <div className={styles.title}>
              Hi i am <br />
              {Bio.name}
            </div>
            <div className={styles.textLoop}>
              I am a{" "}
              <span className={styles.span}>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className={styles.subTitle}>{Bio.description}</div>
            <Link
              className={styles.resumeButton}
              to={Bio.resume}
              target="blank"
            >
              Check Resume
            </Link>
          </div>
          <div className={styles.heroRightContainer}>
            <img className={styles.img} src={HeroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
