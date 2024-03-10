import React from "react";
import videos from "../etc/Fog.mp4";
import "./Fog.css";

const Fog = () => {
  return (
    <video className="fog" loop autoPlay muted>
      <source src={videos} type="video/mp4" />
    </video>
  );
};

export default Fog;
