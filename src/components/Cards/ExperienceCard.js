import React from "react";
import styles from "./css/experienceCard.module.css";
// import { Link } from "react-scroll";
const ExperienceCard = ({ experience }) => {
  return (
    <div className={`${styles.card} ${styles.cardBorder}`}>
      <div className={styles.top}>
        <img src={experience.img} className={styles.image} alt="Experience" />
        <div className={styles.body}>
          <div className={styles.role}>{experience.role}</div>
          <div className={styles.company}>{experience.company}</div>
          <div className={styles.date}>{experience.date}</div>
        </div>
      </div>
      <div className={styles.description}>
        {experience?.desc && (
          <div className={styles.span}>{experience?.desc}</div>
        )}
        {experience?.skills && (
          <>
            <br />
            <div className={styles.skills}>
              <b>Skills:</b>
              <div className={styles.itemWrapper}>
                {experience?.skills?.map((skill, index) => (
                  <div className={styles.skill} key={index}>
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {experience.doc && (
        <a href={experience.doc} target="_blank" rel="noopener noreferrer">
          <img
            src={experience.docImg}
            className={styles.document}
            alt="Document"
          />
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
