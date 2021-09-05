import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <img
          src="https://cmscollege.ac.in/wp-content/themes/cms/assets/images/footer-clg-logo.jpg"
          alt="cms footer logo"
        />
        <p className="footer-subscription-heading">CMS COLLEGE (AUTONOMOUS)</p>
        <p className="footer-subscription-text">
          The CMS College, Kottayam, founded by the Church Missionary Society of
          England, is one of the oldest institutions of higher education in
          India.
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Academics</h2>
            <Link to="/">Curriculum</Link>
            <Link to="/">Examinations</Link>
            <Link to="/">All Departments</Link>
            <Link to="/">Faculty</Link>
            <Link to="/">Evaluation</Link>
            <Link to="/">Departmental</Link>
            <Link to="/">DBT Star</Link>
            <Link to="/">College Scheme</Link>
          </div>
          <div class="footer-link-items">
            <h2>Admissions</h2>
            <Link to="/">Notifications</Link>
            <Link to="/">Programs</Link>
            <Link to="/">UG Online Admission</Link>
            <Link to="/">PG Online Admission</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Research</h2>
            <Link to="/">Publications</Link>
            <Link to="/">General Overview</Link>
            <Link to="/">Research Centers</Link>
            <Link to="/">Research Supervisors</Link>
            <Link to="/">List of Research Scholars</Link>
            <Link to="/">Resource for researchers</Link>
            <Link to="/">ICAAP & SP</Link>
          </div>
          <div class="footer-link-items">
            <h2>Future students</h2>
            <Link to="/">Doctoral Programs</Link>
            <Link to="/">Postgraduate Programs</Link>
            <Link to="/">Undergraduate Programmes</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>CAMPUS LIFE</h2>
            <Link to="/">Complaints and Grievances</Link>
            <Link to="/">General Overview</Link>
            <Link to="/">Students Support @CMS</Link>
            <Link to="/">Right to Information (RTI)</Link>
            <Link to="/">Campus Placements</Link>
            <Link to="/">Anti Ragging Cell</Link>
            <Link to="/">Counseling</Link>
            <Link to="/">Magazine</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src="https://cmscollege.ac.in/wp-content/themes/cms/assets/images/cms-college-kottayam.png"
                alt="CMS College"
              />
            </Link>
          </div>
          <small class="website-rights">
            Copyright © 2021 CMS College Kottayam. All rights Reserved.
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
