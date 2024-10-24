const heading = React.createElement("h1",{id:"heading"},"Hello world from React");

const parent = React.createElement("div",{},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"Iam h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"Iam h2 tag")
    ])
])

    const root = ReactDOM.creatRoot(document.getElementById("roor"));

    root.render(parent);