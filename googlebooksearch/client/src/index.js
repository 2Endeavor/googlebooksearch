// IMport the react component
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// ReactDOM renders the app comonent into the id of root serviceWorker on lin 4
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
