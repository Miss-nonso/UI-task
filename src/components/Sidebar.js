// Sidebar.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

const Sidebar = () => (
  <Drawer variant="permanent">
    <List>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HandshakeOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Mentors" />
      </ListItem>

      <hr />
      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Deliverables" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
