import React, { useEffect, useState } from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import Terminal from "../../Component/Terminal/Terminal";
import SoundToggle from "../../Component/Mute/SoundToggle";
import "./playpage.css";
import pen1 from "../../p1.png";
import coin from "../../money.png";
import bubble from "../../bubble.png";
import ice from "../../region@2x.png";
import Countdown from "../../Component/Countdown/Countdown";
import Counter from "../../Component/Time/Counter";
import Region from "../../Component/Map/Regaion";
import myMp3File from "../playpage/fire.mp3";

function PlayPage() {
  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.addEventListener("canplaythrough", () => {
      audioEl.play();
    });
  }, []);

  const budget = 10000;

  return (
    <div>
      <div>
        <audio className="audio-element" autoPlay loop src={myMp3File} />
      </div>
      <div className="Terminal">
        <Terminal />
      </div>
      <div className="turn">
        <h1>Turn : 1</h1>
      </div>
      <div className="SoundToggle">
        <SoundToggle />
      </div>
      <div className="plan">
        <h1>Construction plan's</h1>
      </div>
      <Region />
      {/* <div className="Counter">
        <Counter />
      </div> */}
      <Countdown />
      <img id="money-img" src={coin} alt="money" />
      <img id="p1-img" src={pen1} alt="player 1" />
      <img id="speech" src={bubble} alt="bubble" />
      <div className="box2"></div>
      <img id="ice" src={ice} alt="ice" />
      <img id="money-img2" src={coin} alt="money" />
      <div className="box3"></div>
      <div className="box">
        <div className="budget">
          <p>{budget}</p>
        </div>
      </div>
      {/* <div className="square5"></div> */}
      <div className="sq"></div>
      <div className="right-button-container">
        <div className="button-container right-button">
          <button className="custom-btn btn-3">
            <span7>Player1</span7>
          </button>
        </div>
        <div className="button-container right-button">
          <button className="custom-btn btn-4">
            <span7>Player2</span7>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayPage;
