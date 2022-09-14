import React from "react";

import WheelComponent from "react-wheel-of-prizes";
import classes from "./SpinWheel.module.css";

const SpinWheel = (props) => {
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className={classes.wheel}>
      <WheelComponent
        segments={props.segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={props.size}
        upDuration={50}
        downDuration={100}
        fontFamily="Ariel"
      />
    </div>
  );
};

export default SpinWheel;
