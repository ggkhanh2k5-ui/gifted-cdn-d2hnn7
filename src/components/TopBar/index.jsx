import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  
  let contextText = "";
  
  if (pathParts.length === 3) {
    const routeType = pathParts[1];
    const userId = pathParts[2];
    const user = models.userModel(userId);

    if (user) {
      const fullName = `${user.first_name} ${user.last_name}`;
      if (routeType === "users") {
        contextText = fullName;
      } else if (routeType === "photos") {
        contextText = `Photos of ${fullName}`;
      }
    }
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit">
          Nguyễn Nam Khánh - B23DCAT149
        </Typography>
        
        <Typography variant="h5" color="inherit">
          {contextText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;