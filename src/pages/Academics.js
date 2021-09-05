import React from "react";
import "../App.css";
import Undergraduate from "../components/Academic-undergraduate/Undergraduate";
import Footer from "../components/Footer/Footer";
import Grid from "../components/Grid/Grid";

export default function Academics() {
  // return <h1 className="services">SERVICES</h1>;
  return (
    <div>
      <div className="academics">
        <h2>Academics</h2>
      </div>
      <div className="aboutus-grid">
        <hr className="aboutus-horizontal-line" />
        <div className="aboutus-grid-1">
          <Grid title="Faculty Members" desc="2,489" />
          <Grid title="Students-to-faculty ratio" desc="5 : 1" />
          <Grid title="Graduate Field of Study" desc="Nearly 200" />
        </div>
        <hr className="aboutus-horizontal-line" />
      </div>
      <div className="undergraduate">
        <h1 className="undergraduate-heading">Undergraduate Studies</h1>
        <div className="undergraduate-1">
          <img
            src="https://s3.eu-north-1.amazonaws.com/images.free-apply.com/uni/gallery/lg/1035601667/9052f19a7e9e2d16a10cdc933efd9faa0743a673.jpg"
            alt=""
            className="undergraduate-img-1"
          />
          <Undergraduate />
        </div>
      </div>
      <div className="undergraduate">
        <h1 className="undergraduate-heading">Postgraduate Studies</h1>
        <div className="undergraduate-2">
          <img
            src="https://s3.eu-north-1.amazonaws.com/images.free-apply.com/uni/gallery/lg/1035601667/9052f19a7e9e2d16a10cdc933efd9faa0743a673.jpg"
            alt=""
            className="undergraduate-img-2"
          />
          <Undergraduate />
        </div>
      </div>
      <Footer />
    </div>
  );
}
