import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "@styles/GlobalStyles";
import { ThemeProvider } from "@context/themeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
