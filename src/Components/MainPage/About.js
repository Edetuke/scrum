import classes from "./About.module.css";
import AboutBackround from "../../Logos/images/about-backroud.jpg";

const About = () => {
  return (
    <div className={classes.about}>
      <img className={classes.backround} src={AboutBackround} alt="about" />
      <div className={classes.text}>
        <h2>One page to simplify your scrum process</h2>
        <p>
          Open-source, team oriented and contains all the required
          functionalities to faster your scrum process.
        </p>
      </div>
      <button className={classes.button}>Try facilitator election</button>
    </div>
  );
};

export default About;
