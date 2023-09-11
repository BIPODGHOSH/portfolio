import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.Nav}>
      <div className={styles.NavContainer}>
        <Link href="/" className={styles.NavLogo}>
          <DiCssdeck size="3rem">
            <span>Portfolio</span>
          </DiCssdeck>
        </Link>
        <div className={styles.MobileIcon}>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></FaBars>
        </div>
        <ul className={styles.NavItems}>
          <a className={styles.NavLink} href="#home">
            Home
          </a>
          <a className={styles.NavLink} href="#skills">
            Skills
          </a>
          <a className={styles.NavLink} href="#experience">
            Experience
          </a>
          <a className={styles.NavLink} href="#projects">
            Projects
          </a>
          <a className={styles.NavLink} href="#education">
            Education
          </a>
        </ul>
        <div className={styles.ButtonContainer}>
          <button className={styles.GitHubButton}>
            <a className={styles.buttonText} href={Bio.github} target="blank">
              Github
            </a>
          </button>
          <button className={styles.GitHubButton}>
            <a className={styles.buttonText} href={Bio.linkedin} target="blank">
              Linkedin
            </a>
          </button>
          <button className={styles.GitHubButton}>
            <a className={styles.buttonText} href={Bio.litcode} target="blank">
              Litcode
            </a>
          </button>
          <button className={styles.GitHubButton}>
            <a className={styles.buttonText} href={Bio.facebook} target="blank">
              Facebook
            </a>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`${styles.MobileMenu} ${isOpen ? styles.open : ""}`}>
          <a className={styles.MobileMenuLink} href="#home">
            Home
          </a>
          <a className={styles.MobileMenuLink} href="#skills">
            Skills
          </a>
          <a className={styles.MobileMenuLink} href="#experience">
            Experience
          </a>
          <a className={styles.MobileMenuLink} href="#projects">
            Projects
          </a>
          <a className={styles.MobileMenuLink} href="#education">
            Education
          </a>

          <a className={styles.MobileSocial} href={Bio.github} target="blank">
            Github
          </a>

          <a className={styles.MobileSocial} href={Bio.linkedin} target="blank">
            Linkedin
          </a>

          <a className={styles.MobileSocial} href={Bio.facebook} target="blank">
            Facebook
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
