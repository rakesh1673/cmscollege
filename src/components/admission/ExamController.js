import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import "./Exam.css";

const useStyles = makeStyles(() => ({
  btn: {
    border:'2px solid #B1040E',
    color: "#B1040E",
    padding: "5px",
    fontSize:'18px'
    // fontWeight:'bold'
  },
  "&:hover":{
    backgroundColor: " #fff",
    color: "#B1040E",
  }
}));

const ExamController = () => {
  const classes = useStyles();
  return (
    <div>
        <div className="module mid">
        <h2>Examination</h2>
      </div>
      <Container style={{padding:0,}}>
        <Grid container className="border-cont">
          <Grid item md={6} xs={12}>
            <div className="controller">
              <h1>Controller of Examination</h1>
              <div>
                <img
                  src="http://cmscollege.ac.in/wp-content/uploads/2021/08/4.-C.RAVIKUMAR.gif"
                  height="320px"
                  width="50%"
                />
              </div>
              <h2>Dr. C.Ravikumar</h2>
              <p>Controller of Examinations</p>
              <p>
                <b>Email:</b> controllerexams@cmscollege.ac.in
              </p>
              <p>
                <b>Phone:</b> +91 99613 39584, +91 73562 77815
              </p>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="app-online">
              <h1>Application</h1>
              <p>Instructions to apply</p>
            </div>
            <ul className="steps-app">
              <li>For Online Application Click “Apply Now” given below.</li>
              <li>
                By entering Name of Exam, UPRN and your DOB , You can view your
                Application Form.
              </li>
              <li>
                Your Application is successful only after you pay Examination
                Fee. There are 2 options to pay Fees
              </li>

              <ul>
                <li>Online : Using Debit\ Credit Card or Net Banking</li>
                <li>Offline : Pay Fees at College Office</li>
              </ul>
              <li>
                If you choose Online payment and successfully paid your fees,
                your application is success and you can download your
                application form ( No need to submit application form to college
                office).
              </li>
              <li>
                If you opt Offline Payment, your application is pending until
                you pay Fees at College Office.
              </li>
              <li>
                If you have attendance below 75% but greater than 65% , you
                should pay Condonation fee along with Exam fee. Only 2
                condonations are allowed in a Programme. After payment , you
                have option to download condonation forms and submit it to
                college office.
              </li>
              <li>
                If you have attendance below 65% please contact college Office.
              </li>
            </ul>
           <div style={{padding:'10px'}}>
           <Button variant="outlined" fullWidth className={classes.btn}>
              Apply Now
            </Button>
           </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ExamController;
