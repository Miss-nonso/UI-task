import React, { useEffect, useState } from "react";
import { Grid2, Container } from "@mui/material";
import DashboardCard from "../components/DashboardCard";
import Table from "../components/Table";
import Chart from "../components/Chart";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Container>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} md={6}>
          <DashboardCard title="Users" count={data.length} />
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <DashboardCard title="Posts" count={10} />
        </Grid2>
        <Grid2 item xs={12} md={8}>
          <Chart data={data} />
        </Grid2>
        <Grid2 item xs={12}>
          <Table data={data} />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Dashboard;
