import React from "react";
import ReactDOM from "react-dom/client";



const title =(
    <h1 className="heading">
        Namaste reactbb
    </h1>
    );

    const data = 1000;
const HeadingComponent = ()=>(
     <div id="container">
        {data}
        {title}
     <h1>React Functional Component</h1>
     </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
