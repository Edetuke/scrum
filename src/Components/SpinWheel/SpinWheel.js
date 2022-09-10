import React from "react";

import WheelComponent from "react-wheel-of-prizes";

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
    <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment="won 10"
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={false}
      size={290}
      upDuration={100}
      downDuration={1000}
      fontFamily="Arial"
    />
  );
};

export default SpinWheel;
