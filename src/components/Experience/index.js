import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container} id="experience">
      <div className={styles.wrapper}>
        <div className={styles.title}>Experience</div>
        <div className={styles.desc}>
          My experience as a software engineer working on different projects and
          a company.
        </div>
        <div className={styles.timelineSection}>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
