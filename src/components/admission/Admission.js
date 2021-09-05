import { Container, Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import "./admission.css";

const useStyles = makeStyles(() => ({}));

const Admission = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="module mid">
       
     <h2>Admission</h2>
      </div>
      <Container style={{padding:0, }}>
        {/* <img
          src="https://www.stanford.edu/wp-content/uploads/2020/09/Admission-2048x819.jpg"
          width="100%"
          height="auto"
        /> */}

        <Grid container style={{borderTop:'2px solid black', borderBottom:'2px solid black', padding:'40px', }}>
          <Grid item md={4} xs={12} style={{padding:'20px'}}>
            <div className="students">
              <h1>6,994</h1>
              <p>Undergraduate students</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12} style={{padding:'20px'}}>
            <div className="students">
              <h1>Class of 2023</h1>
              <p>from 77 countries + 48 states</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12} style={{padding:'20px'}}>
            <div className="students">
              <h1>9,390</h1>
              <p>Graduate students</p>
            </div>
          </Grid>
         
        </Grid>
      </Container>
    </div>
  );
};

export default Admission;
