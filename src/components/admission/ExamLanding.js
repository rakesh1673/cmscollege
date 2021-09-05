import React from "react";
import "./Exam.css";
const ExamLanding = () => {
  return (
    <div>
      
      <div className="section-exam">
        <div class="container-exam">
          <div class="left-exam">
            <div class="content-exam">
              <h1>Exam Results </h1>
              {/* <p>
                About 1,700 freshmen and 30 transfer students are admitted to
                Stanford each year. We review each applicant with an eye to
                academic excellence, intellectual vitality and personal context.
              </p> */}
              <ul className="list-result">
                <li>
                  {" "}
                  <a href="#">Revaluation Results</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Prior to 2019 Admissions</a>
                </li>
                <li>
                  {" "}
                  <a href="#">2019 Admissions Onwards</a>
                </li>
              </ul>
            </div>
            <div className="content2-exam">
              <h1>Revaluation </h1>
              <ul className="list-result">
                <li>
                  {" "}
                  <a href="#">Apply for Revaluation</a>
                </li>
              </ul>
            </div>
            <div className="content3-exam">
              <h1>Concession </h1>

              <ul className="list-result">
                <li>
                  {" "}
                  <a href="#">Notification Regarding the Concession</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Guidelines for Exam Concessions</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Application for Exam Concession</a>
                </li>
                <li>
                  <a href="#">Proforma Showing Details of Scribes</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right-exam"></div>
        </div>
      </div>
    </div>
  );
};

export default ExamLanding;
