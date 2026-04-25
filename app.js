import React from "react";
import ReactDOM from "react-dom/client";

const paragraph = React.createElement('p', {}, "This is paragraph tag");
const parent = React.createElement('div', {id: 'parent1'},
    React.createElement('div', {id:'parent2'},
        [
            React.createElement('h1', {id:'heading7'}, "I'm in Heading tag testing"),
            React.createElement('h2', {id:'heading9'}, "I am in a Heading 2 tag"),
        ]
    )
)
console.log("parent", parent);
console.log('paragraph', paragraph);

const rootReact = ReactDOM.createRoot(document.getElementById('root'));
rootReact.render(parent);


const parents = React.createElement("div", {id:"parent3"},
    React.createElement('div', {id:"parent4"},
        [
            React.createElement("h1", {id:"heading8"}, "Heading1 tag 8"),
            React.createElement('h2', {id:"heading8"}, "I a in a heading2 8th id tag")
        ]

    )

);
console.log("parents", parents);

const rootReact2 = ReactDOM.createRoot(document.getElementById('root2'));
rootReact2.render(parents);


