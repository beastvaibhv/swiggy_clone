import React from "react";
import ReactDOM  from "react-dom/client";

const heading1 = React.createElement(
    "h1",
    {id:"title"},
    "Heading 1");

const heading2 = React.createElement(
    "h2",
    {id:"title"},
    "Hello World!");
const container = React.createElement(
    "div",
    {id:"container"},
    [heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
console.log(heading1);
console.log(heading2);
console.log(container);



