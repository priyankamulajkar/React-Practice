import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import Header from "../components/Header"

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
