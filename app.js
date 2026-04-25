import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "This is my Heading");
console.log("Heading", heading);

const heading2 = (
<>
<h2>This is my heading 2 with react element</h2>
</>
);

const number =  100;

const HeadingComponent = () =>{
    return(
        <>
            { heading2 }
            { number /10 }
             <h2>This is my functional component</h2>
            <h3>This is my heading 3</h3>
        </>
    );
}

const AnotherComponent = () => (
    <>
        <HeadingComponent />
        <HeadingComponent ></HeadingComponent>
        <h1>we are testing this functional componet</h1>
        {HeadingComponent()}
        <h2>This is Another component</h2>
        <h2>This is Another component</h2>
        <h2>This is Another component</h2>
    </>
    
)
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<AnotherComponent />);