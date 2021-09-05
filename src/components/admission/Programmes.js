import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
const data = [
  {
    hd: "Undegraduate",
    desc: "High school students, current Stanford students and other college students can all apply to participate in eight week summer academic programs.",
    link: " Summer Session",
    url: "/ug",
  },
  {
    hd: "Postgraduate",
    desc: "Stanford offers valuable opportunities in continuing adult education, executive and professional programs, and special programs for K-12 students.",
    link: "Continuing Education Programs",
    url: "/pg",
  },
  {
    hd: "PHD Programmes",
    desc: "Details of PhD registration, course work and other details may be availed from the research co-ordinator of the College or from the respective department",
    link: "PHD Programmes",
    url: "/phd",
  },
];

const Programmes = () => {
  return (
    <div style={{marginTop:'3%'}}>
     <div >
     <div className="hd-prog">
        <h1>Applying To Other Programs</h1>
      </div>
      <Grid container>
        {data.map((item) => (
          <Grid item md={4} xs={12} style={{padding:'20px'}}>
              <div className='prog-content'>
                  <h1>{item.hd}</h1>
                  <p>{item.desc} </p>
                  <Link style={{textDecoration:'none', fontSize:'19px', fontWeight:'bold'}} to={item.url}>
                      {item.link}
                  </Link>
              </div>
          </Grid>
        ))}
      </Grid>
      <img src='https://www.stanford.edu/wp-content/uploads/2017/03/Stanford_Dish.jpg' height='400px' width='100%'/>
     </div>
    </div>
  );
};

export default Programmes;
