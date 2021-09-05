import React from "react";
import "./Exam.css";
const Examnotif = () => {
  return (
    <div>
      <div className="section-exam-notif">
        <div class="container-exam-notif">
          <div class="left-exam-n"></div>
          <div class="right-exam-notif">
            <div class="content-exam-notif">
              <h1>Examinations</h1>
              <p>
                CMS College Kottayam (Autonomous) was conferred with the
                Autonomous status as per UGC No.F.22-1/2016 (AC) dated 9th March
                2016 and Mahatma Gandhi U.O.No.2732/VII/2016/Acad. dated 12th
                May 2016. The Governing Council of CMS College Kottayam
                (Autonomous) at its meeting held on 6th April 2018 approved the
                regulations for the Under Graduate Programmes under Choice Based
                Credit System 2018. The Governing Council of CMS College
                Kottayam (Autonomous) hereby states the following regulations
                for Under Graduate Programmes under Choice Based Credit System
                2018.
              </p>
              <ul className="exam-notif">
                <li>
                  <a href="#">Regulations for Under Graduate Programmes</a>{" "}
                </li>
                <li>
                  <a href="#">Examination Schedule</a>{" "}
                </li>
                <li>
                  <a href="#">Examination Notification</a>{" "}
                </li>
                <li>
                  <a href="#">Valuation</a>{" "}
                </li>
                <li>
                  <a href="#">Examination Downloads</a>{" "}
                </li>
                <li>
                  <a href="#">Examiner Portal</a>{" "}
                </li>
              </ul>
            </div>
            {/* <div class="content2-exam-notif">
              <h1>Postgraduate</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                assumenda dolore reprehenderit ullam blanditiis ex sapiente
                pariatur tempore incidunt facilis?
              </p>
              <a href="#">Postgraduate</a>
            </div> */}
            {/* <div class="content3-exam-notif">
              <h1>Aided Programmes</h1>
              <p>
                An additional 10 percentage of seats (over and above the
                sanctioned strength) is earmarked for foreign students for each
                PG programme.
              </p>
              <a href="#">Aided Programmes</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examnotif;
