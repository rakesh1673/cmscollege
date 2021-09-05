import { Grid } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";
import React from "react";

const data = [
  {
    points:
      "UG ADMISSION 2021-2022 (Notification no. CMS.UG/Adm01/2021, Dated 30 July 2021)  ,",
    download: "Click Here For Download",
  },
  {
    points:
      "UG ADMISSION 2021-2022 (Notification no. CMS.UG/Adm 06/2021 ,Dated 28 August 2021 )",
    download: "Click Here For Download",
  },
  {
    points:
      "UG ADMISSION 2021-2022 (Notification no. CMS.UG/Adm 05/2021 ,Dated 24 August 2021 )",
    download: "Click Here For Download",
  },
  {
    points:
      "UG ADMISSION 2021-2022 (Notification no. CMS.UG/Adm 04/2021 ,Dated 20 August 2021 ) ",
    download: "Click Here For Download",
  },
  {
    points:
      "UG ADMISSION 2021-2022 (Notification no. CMS.UG/Adm 03/2021 ,Dated 18 August 2021 )",
    download: "Click Here For Download",
  },
  {
    points:
      "UG ADMISSION 2021-2022 (Notification no. CMS.UG/Adm02/2021, Dated 13 August 2021)",
    download: "Click Here For Download",
  },
];

const data2 = [
  {
    points:
      "UG ADMISSION 2021-2022 (Notification no. CMS.UG/Adm01/2021, Dated 30 July 2021)",
    download: "Click Here For Download",
  },
];

const LatestNotif = () => {
  return (
    <div style={{backgroundColor:'#F4F4F4'}}>
      <div className="notif">
        <h1>Notifications</h1>
      </div>
      <Grid container>
        {data.map((item) => (
          <Grid item md={4} xs={12}>
            <div className="points-notif">
              {/* <Notifications /> */}

              <p>
                {item.points}
                <a href="#">
                  <span>{item.download}</span>
                </a>
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item md={4} />
        {data2.map((item) => (
          <Grid item md={4} xs={12}>
            <div className="points-notif">
              {/* <Notifications /> */}
              <p>
                {item.points}
                <a href="#">
                  <span>{item.download}</span>
                </a>
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LatestNotif;
