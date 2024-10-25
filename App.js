// const heading = React.createElement("h1",{id:"heading"},"Hello world from React");

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"This is namaste react"),
        React.createElement("h2",{},"Iam h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"Iam h2 tag")
    ])
])

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);