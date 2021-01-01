import React from "react";
import { Button } from "./Button";
import "./Hero.css";
import "../App.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-01.mp4" autoPlay loop muted />
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Hero;
