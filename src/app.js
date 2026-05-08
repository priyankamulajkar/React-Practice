import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import Header from "../components/Header";
import "../styles.css";
import UseStateHook from "../PoC/hooks/useStateHook";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      {/* <UseStateHook /> */}
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppLayout />);
