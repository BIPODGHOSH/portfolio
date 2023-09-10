import React from "react";
import PropTypes from "prop-types";
import styles from "./css/projectCard.module.css";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      className={styles.card}
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <a href={project.webapp} target="blank">
        <img src={project.image} alt={project.title} className={styles.image} />
      </a>
      <div className={styles.tags}>
        {project.tags?.map((tag, index) => (
          <span className={styles.tag} key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.details}>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.date}>{project.date}</div>
        <div className={styles.description}>{project.description}</div>
      </div>
      {/* <div className={styles.members}>
        {project.member?.map((member, index) => (
          <img
            src={member.img}
            alt={`Member ${index + 1}`}
            className={styles.avatar}
            key={index}
          />
        ))}
      </div> */}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ProjectCard;
