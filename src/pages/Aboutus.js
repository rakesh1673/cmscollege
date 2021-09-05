import React from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import Grid from "../components/Grid/Grid";

export default function Aboutus() {
  // return <h1 className="products">PRODUCTS</h1>;
  return (
    <div>
      <div className="aboutus">
        <h3 className="aboutus-heading">About CMS</h3>
        <p className="aboutus-description">
          A place for learning, discovery, innovation, expression and discourse
        </p>
      </div>
      <div className="aboutus-section-2">
        <h1>Vision and Mission</h1>
        <p>
          The CMS College endeavours to live up to its motto Thy Word is Truth
          which inspired the founding fathers of the college to enlighten the
          populace of this region two centuries ago. The emblem of the college
          is a translation of the motto. The vision, mission and objectives are
          established accordingly.
        </p>
        <div className="aboutus-section-2-description">
          <div className="aboutus-card">
            <h3>Vision</h3>
            <p>
              The CMS College shall be a centre of excellence for imparting
              value-based liberal education aimed at promoting inclusive and
              holistic growth of the learner with thrust on real-time needs.
            </p>
          </div>
          <div className="aboutus-card">
            <h3>Mission</h3>
            <p>
              The College strives to: Achieve excellence by imparting quality
              education through teaching, learning, research and extension
              activities. Inculcate values of integrity, justice and compassion
              in the young minds to keep alive the missionary zeal of the
              founders. Execute academic and administrative policies in a
              flexible environment.
            </p>
          </div>
        </div>
      </div>

      <div className="aboutus-grid">
        <hr className="aboutus-horizontal-line" />
        <div className="aboutus-grid-1">
          <Grid title="Opened in" desc="1817" />
          <Grid title="Located in" desc="Kottayam, Kerala" />
          <Grid title="Students" desc="16,897" />
          <Grid title="Faculty" desc="2,489, Kerala" />
        </div>
        <hr className="aboutus-horizontal-line" />
      </div>
      <Footer />
    </div>
  );
}
