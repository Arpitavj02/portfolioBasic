import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: { primary: { main: "#1976d2" }, secondary: { main: "#f50057" } },
  typography: { fontFamily: "Roboto, Arial" },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
