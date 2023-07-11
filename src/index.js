import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import FuncComp from "./FuncComp";
import FuncComp2 from "./FuncComp2";
import {ClassComp} from "./ClassComp"

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<FuncComp data1 = "Reality is nothing!"/>, document.getElementById("headsup"));
ReactDOM.render(<FuncComp2 data21 = "2+2 = 2*2" data22 = "0+0+0+0+0 = 0"/>, document.getElementById("bodydown"));
ReactDOM.render(<ClassComp data3 = "Fly is faster than since it has thousands of lens in it's eyes"/>, document.getElementById("tailer"));