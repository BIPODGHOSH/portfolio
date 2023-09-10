import React from "react";
import styles from "./skills.module.css"; // Import the CSS module
import { skills } from "../../data/constants";

const Skills = () => {
  return (
    <div className={styles.Container} id="skills">
      <div className={styles.Wrapper}>
        <div className={styles.Title}>Skills</div>
        <div className={styles.Desc}>
          Here are some of my skills on which I have been working on for the
          past 4 years.
        </div>
        <div className={styles.SkillsContainer}>
          {skills.map((skill, index) => (
            <div className={styles.Skill} key={index}>
              <div className={styles.SkillTitle}>{skill.title}</div>
              <div className={styles.SkillList}>
                {skill.skills.map((item, i) => (
                  <div className={styles.SkillItem} key={i}>
                    <img
                      className={styles.SkillImage}
                      src={item.image}
                      alt={item.name}
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
