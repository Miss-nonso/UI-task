// Header.js
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        style={{ textAlign: "center" }}
      >
        Flexi mini Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
