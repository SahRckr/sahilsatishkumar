import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";

import "./index.css";

ReactGA.initialize("UA-123273288-1");
ReactGA.pageview("homepage");

ReactDOM.render(<App />, document.getElementById("root"));
