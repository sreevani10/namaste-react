import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => Html element (render)

const heading = React.createElement("h1", {}, "Reactttt");

//JSX (transpiled before it reaches the JS) - PARCEL give responsibility to transpiler babel - BABEL

//JSX => Babel transapiler convert it to => React.createElement => ReactElement.JS Object => HtmlElement (render)

//to write jsx in multiple lines we can wrap elements into ()
const jsxHeading = (
<h1 className="heading">
    Namaste reactbb
</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
