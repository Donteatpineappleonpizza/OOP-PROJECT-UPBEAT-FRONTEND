// eslint-disable-next-line
import React from "react";
import ReactDOM from "react-dom";
import "./howpage.css";
import logo from "../../logo1.png";
import How from "./How.png";
import { Link } from 'react-router-dom';
import bg from '../../Background1.png'
import mySound from "../howpage/susu.mp3";
import { Howl, Howler } from 'howler';

Howler.volume(0.5); // set global volume to 50%

// Create a new sound
const sound = new Howl({
  src: ['mySound'],
  autoplay: true,
  loop: true
});

function Howpage() {
  return (
    <div>
      <div>
        <audio className="audio-element" autoPlay loop src={mySound} type="audio/mpeg"/>
      </div>
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
