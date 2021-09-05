import React from "react";
import "./organization.css";
const OrgCouncils1 = () => {
  return (
    <div>
      <div className="section-org-council">
        <div class="container-org-council">
          <div class="left-org-council">
            <div class="content-org-council">
              <h1>Managing Council </h1>
              <p>
                The CMS College Kottayam is under the management of CSI Madhya
                Kerala Diocese. Our Managing Council consists of thirteen
                members. 
              </p>
              <ul className="list-result">
                <li>
                  {" "}
                  <a href="#">CSI Madhya Kerala Diocese</a>
                </li>
                {/* <li>
                  {" "}
                  <a href="#">Prior to 2019 Admissions</a>
                </li>
                <li>
                  {" "}
                  <a href="#">2019 Admissions Onwards</a>
                </li> */}
              </ul>
            </div>
            <div className="content2-org-council">
              <h1>Governing School </h1>
              <ul className="list-result">
                <li>
                  {" "}
                  <a href="#">Minutes of governing school Meetings</a>
                </li>
              </ul>
            </div>
            <div className="content3-org-council">
              <h1>Academic Council </h1>

              <ul className="list-result">
                <li>
                  {" "}
                  <a href="#">Academic Council</a>
                </li>
                {/* <li>
                  {" "}
                  <a href="#">Guidelines for Exam Concessions</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Application for Exam Concession</a>
                </li>
                <li>
                  <a href="#">Proforma Showing Details of Scribes</a>
                </li> */}
              </ul>
            </div>
            <div className="content3-org-council">
              <h1>College Council </h1>

              <ul className="list-result">
                <li>
                  {" "}
                  <a href="#">College Council</a>
                </li>
                {/* <li>
                  {" "}
                  <a href="#">Guidelines for Exam Concessions</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Application for Exam Concession</a>
                </li>
                <li>
                  <a href="#">Proforma Showing Details of Scribes</a>
                </li> */}
              </ul>
            </div>
          </div>
          <div class="right-exam-c"></div>
        </div>
      </div>
    </div>
  );
};

export default OrgCouncils1;
