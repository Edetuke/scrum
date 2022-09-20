import React from "react";

import WheelComponent from "react-wheel-of-prizes";
import classes from "./SpinWheel.module.css";

const SpinWheel = () => {
  const segments = ["Edita", "Gedas", "Karina", "Fronte", "Gytis", "Gyte"];
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
        segments={segments}
        segColors={segColors}
        winningSegment="won 10"
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={200}
        upDuration={50}
        downDuration={200}
        fontFamily="Arial"
      />
    </div>
  );
};

export default SpinWheel;
