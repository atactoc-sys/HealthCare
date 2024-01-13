// HeaderMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";
import ListTwoToneIcon from "@mui/icons-material/ListTwoTone";
import { Typography, Button } from "@mui/material";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import profilepic from "./../../assets/profile-user.png";

function HeaderMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="header">
      <div className="headercomponent">
        <div className="left">
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="dmt"
          >
            <div className="menu">
              <div className="greeting">
                <Typography variant="h5">Hello & welcome</Typography>
              </div>
              <div className="menuItems">
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/reports">REPORTS</Link>
                  </li>
                  <li>
                    <Link to="/heartRate">HEARTRATE</Link>
                  </li>
                  <li>
                    <Link to="/steps">STEPS</Link>
                  </li>
                  <li>
                    <Link to="/shedule">SCHEDULE</Link>
                  </li>
                  <li>
                    <Link to="/login">LOGIN</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Drawer>
          <ListTwoToneIcon onClick={toggleDrawer} />
          <Typography variant="h5">Health Monitor</Typography>
        </div>
        <div className="right">
          <img src={profilepic} alt="user" />
          <Button variant="outlined" href="#outlined-buttons">
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
