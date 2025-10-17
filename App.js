import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React Element => Object =>HTML Element(rendered in the DOM)

const heading = React.createElement("h1", { id: "title" }, "Namaste React");

console.log(heading);

// JSX => html like syntax
//JSX (transpiled before it reaches to js enginer or browser) => PARCEL => BABEL
//JSX => Babel transpiles it to
// \React.createElemnt => React Element => Object => HTML Element (render)

const Title = () => <h1 className="head">Namaste React using JSX</h1>;

//React Components
//Functional and Class based Components

// Component Composition => Composing 2 components into one another
const HeaderComponet = () => (
  <div>
    <Title />
    <h1>React Funcional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponet />);
