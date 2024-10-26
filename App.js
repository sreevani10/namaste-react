import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => Html element (render)

const heading = React.createElement("h1", {}, "Reactttt");

//JSX (transpiled before it reaches the JS) - PARCEL give responsibility to transpiler babel - BABEL

//JSX => Babel transapiler convert it to => React.createElement => ReactElement.JS Object => HtmlElement (render)

//to write jsx in multiple lines we can wrap elements into ()

//React Element
const jsxHading = (
<h1 className="heading">
    Namaste reactbb
</h1>
);


///Component Composition -- to put one component into another
const Title =()=> (
    <h1 className="heading">
        Namaste reactbb
    </h1>
    );

//React Component
// Class based com and functional based com
//React Functional Component
const HeadingComponent = ()=>(
     <div id="container">
        <Title/> 

     <h1>React Functional Component</h1>
     </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
