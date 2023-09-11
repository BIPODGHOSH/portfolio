import React from "react";
import { useState } from "react";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";
import styles from "./projects.module.css";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <div className={styles.container} id="projects">
      <div className={styles.wrapper}>
        <div className={styles.title}>Projects</div>
        <div className={styles.desc}>
          I have worked on a wide range of projects. Various type of web apps.
          Here are some of my projects.
        </div>
        <div className={styles.toggleButtonGroup}>
          {toggle === "all" ? (
            <div
              className={`${styles.toggleButton} ${styles.active}`}
              onClick={() => setToggle("all")}
            >
              All
            </div>
          ) : (
            <div
              className={styles.toggleButton}
              onClick={() => setToggle("all")}
            >
              All
            </div>
          )}
          <div className={styles.divider} />
          {toggle === "front end" ? (
            <div
              className={`${styles.toggleButton} ${styles.active}`}
              onClick={() => setToggle("front end")}
            >
              FRONT END'S
            </div>
          ) : (
            <div
              className={styles.toggleButton}
              onClick={() => setToggle("front end")}
            >
              FRONT END'S
            </div>
          )}
          <div className={styles.divider} />
          {toggle === "back end" ? (
            <div
              className={`${styles.toggleButton} ${styles.active}`}
              onClick={() => setToggle("back end")}
            >
              BACK END'S
            </div>
          ) : (
            <div
              className={styles.toggleButton}
              onClick={() => setToggle("back end")}
            >
              BACK END'S
            </div>
          )}
          <div className={styles.divider} />
          {toggle === "full stack" ? (
            <div
              className={`${styles.toggleButton} ${styles.active}`}
              onClick={() => setToggle("full stack")}
            >
              FULL STACK'S
            </div>
          ) : (
            <div
              className={styles.toggleButton}
              onClick={() => setToggle("full stack")}
            >
              FULL STACK'S
            </div>
          )}
        </div>
        <div className={styles.cardContainer}>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
