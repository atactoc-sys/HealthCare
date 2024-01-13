import React from "react";
import "./Home.css";
import doctorImage from "./../../assets/docavatar.jpg";
import { Typography } from "@mui/material";

function Home() {
  return (
    <div className="home">
      <div className="homeBanner">
        <img src={doctorImage} alt="hero" />
        <div className="textart">
          <Typography variant="h3">"The first wealth is health."</Typography>
          <Typography variant="h5">- Ralph Waldo Emerson</Typography>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
