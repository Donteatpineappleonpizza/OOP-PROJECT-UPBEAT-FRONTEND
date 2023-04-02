// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import "./howpage.css";
import logo from "../../logo1.png";
import How from "./How.png";

function Howpage() {
  return (
    <div>
      <div className="bg-image"></div>
      <div className="square"></div>
      <img id="logo" src={logo} />
      <img id="How" src={How} />
      <div id="box1"></div>
      <button11>
        <a href="#" className="custom-btn-11">
          <span2>NEXT</span2>
        </a>
      </button11>
    </div>
  );
}

export default Howpage;
