import { DataProvider } from "@context/dataContext";
import { ThemeProvider } from "@context/themeContext";
import { GlobalStyles } from "@styles/GlobalStyles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <DataProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </DataProvider>
  </React.StrictMode>
);
