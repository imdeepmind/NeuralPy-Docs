import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: red
  },
  shadows: [
    "none"
  ],
  shape: {
    borderRadius: 0
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
