// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import "./howpage.css";
import logo from "../../logo1.png";
import How from "./How.png";
import { Link } from 'react-router-dom';
import bg from '../../Background1.png'

function Howpage() {
  return (
    <div>
      <div className="bg-image"></div>
      <div className="square"></div>
      <img id="logo" src={logo} />
      <img id="How" src={How} />
      <div id="box1"></div>
      <Link to="/character">
      <button11>
          < div className = "custom-btn-11">
          <span2>NEXT</span2>
          </div>
      </button11>
      </Link>
    </div>
  );
}

export default Howpage;
