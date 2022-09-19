import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h2>One page to simplify your scrum process</h2>
      <p>
        Open-source, team oriented and contains all the required functionalities
        to faster your scrum process.
      </p>

      <button className={classes.button}>Try facilitator election</button>
    </div>
  );
};

export default About;
