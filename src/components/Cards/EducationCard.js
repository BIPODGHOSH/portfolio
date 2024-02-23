import React from "react";
import PropTypes from "prop-types";
import styles from "./css/educationCard.module.css";

const EducationCard = ({ education }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img
          src={education.img}
          alt={education.school}
          className={styles.image}
        />
        <div className={styles.body}>
          <div className={styles.name}>{education.school}</div>
          <div className={styles.degree}>{education.degree}</div>
          <div className={styles.date}>{education.date}</div>
        </div>
      </div>
      {education.grade && (
        <div className={styles.grade}>
          <b>Grade: </b>
          {education.grade}
        </div>
      )}
      <div className={styles.description}>
        <div className={styles.span}>{education.desc}</div>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  education: PropTypes.object.isRequired,
};

export default EducationCard;
