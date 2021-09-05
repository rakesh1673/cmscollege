import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./Banner.css";

function bannerSection() {
  return (
    <div className="banner-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1 className="banner-heading">CMS COLLEGE</h1>
    </div>
  );
}

export default bannerSection;
