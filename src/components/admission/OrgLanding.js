import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./organization.css";
const OrgLanding = () => {
  return (
    <div>
      <div className="module-org mid">
        <h2>Organisation</h2>
      </div>
      <Container>
        <Grid container>
          <Grid item md={6} xs={12} style={{padding:'20px'}}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://cmscollege.ac.in/wp-content/uploads/2021/07/VCJ.jpg"
                height="auto"
                width="100%"
              />
            </div>
            <div className="principal">
              <h2>Principal</h2>
              <p>Dr Varghese C Joshua</p>
            </div>
          </Grid>
          <Grid item md={4} xs={12} style={{padding:'20px'}}>
          <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="http://cmscollege.ac.in/wp-content/uploads/2015/10/Cinny-1.gif"
                height="323px"
                width="90%"

              />
            </div>
            <div className="vice-principal">
              <h2>Vice-Principal</h2>
              <p>Smt. Cinny Rachel Mathew</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OrgLanding;
