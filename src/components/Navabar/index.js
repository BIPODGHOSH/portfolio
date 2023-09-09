import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Import the CSS file
import { Link, NavLink } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className={styles.Nav}>
      <div className={styles.NavContainer}>
        <Link to="/" className={styles.NavLogo}>
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
          <NavLink className={styles.NavLink} to="#home">
            Home
          </NavLink>
          <NavLink className={styles.NavLink} to="#skills">
            Skills
          </NavLink>
          <NavLink className={styles.NavLink} to="#experience">
            Experience
          </NavLink>
          <NavLink className={styles.NavLink} to="#projects">
            Projects
          </NavLink>
          <NavLink className={styles.NavLink} to="#education">
            Education
          </NavLink>
        </ul>
        <div className={styles.ButtonContainer}>
          <button className="GitHubButton">Github</button>
        </div>
      </div>
      {isOpen && (
        <div className={`${styles.MobileMenu} ${isOpen ? styles.open : ""}`}>
          <NavLink className={styles.MobileMenuLink} to="#home">
            Home
          </NavLink>
          <NavLink className={styles.MobileMenuLink} to="#skills">
            Skills
          </NavLink>
          <NavLink className={styles.MobileMenuLink} to="#experience">
            Experience
          </NavLink>
          <NavLink className={styles.MobileMenuLink} to="#projects">
            Projects
          </NavLink>
          <NavLink className={styles.MobileMenuLink} to="#education">
            Education
          </NavLink>
          {/* <div className={styles.MobileSocialContainer}> */}
          <Link className={styles.MobileSocial} to={Bio.github}>
            Github
          </Link>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
