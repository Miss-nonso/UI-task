// App.js
import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

const theme = createTheme({
  palette: {
    primary: { main: "#54bfa5" },
    background: { default: "#f4f4f4" }
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: "20px" }}>
        <Dashboard />
      </main>
    </div>
  </ThemeProvider>
);

export default App;
