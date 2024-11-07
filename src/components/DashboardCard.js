// DashboardCard.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DashboardCard = ({ title, count }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h2">{count}</Typography>
    </CardContent>
  </Card>
);

export default DashboardCard;
