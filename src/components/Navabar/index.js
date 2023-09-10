import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
// import HeroSection from "../HeroSection";

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
          <button className="GitHubButton">Github</button>
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
          {/* <div className={styles.MobileSocialContainer}> */}
          <Link className={styles.MobileSocial} href={Bio.github}>
            Github
          </Link>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
