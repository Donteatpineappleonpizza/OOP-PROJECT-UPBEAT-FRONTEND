import React, { useState, useRef, useEffect } from "react";
import "../Terminal/terminal.css";

function Terminal() {
  const [command, setCommand] = useState("");
  const [path, setPath] = useState("c:\\scrivener\\bartleby\\> ");
  const [history, setHistory] = useState(["Welcome to upbeat"]);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [isRevisionButton, setIsRevisionButton] = useState(false);

  const getInput = () => {
    return command;
  };

  const attachCommand = () => {
    const newHistory = [...history];
    newHistory.push(`${path}${getInput()}`);
    setHistory(newHistory);
  };

  const returnResponse = () => {
    const newHistory = [...history];
    newHistory.push(command);
    setHistory(newHistory);
  };

  const repeatInput = () => {
    setCommand(history[history.length - 2]);
  };

  const scrollToBottom = () => {
    const result = document.querySelector(".result");
    result.scrollTop = result.scrollHeight;
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      doTheThing();
      console.log("what")
    } else if (e.keyCode === 38) {
      repeatInput();
    }
  };

  const doTheThing = () => {
    const input = getInput().trim();
    if (input !== "") {
      // attachCommand();
      returnResponse();
      scrollToBottom();
    }

    setCommand("");
  };

  const handleEnableButtonClick = () => {
    setIsInputDisabled(true);
    setIsRevisionButton(true);
  };

  const handleDoneButtonClick = () => {
    setIsInputDisabled(false);
    setIsRevisionButton(false);
  };
  

  return (
    <div className="square5">
      <div className="window">
        <ul className="result">
          {history.map((item, index) => (
            <li
              key={index}
              className={index === 0 ? "ready" : ""}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="command-area">
          <label2 htmlFor="command-input"></label2>
          <input
            type="text"
            id="command-input"
            className="command"
            placeholder="type command here…"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isInputDisabled} 
          />
        </div>
      </div>
      <div className="right-button-container1">
        {isRevisionButton ? (
          <div className="button-container1 right-button3">
            <button className="custom-btn4 btn-16" onClick={handleDoneButtonClick}>
              <span12>Revision</span12>
            </button>
          </div>
        ) : (
          <div className="button-container1 right-button2">
            <button className="custom-btn3 btn-15" onClick={handleEnableButtonClick}>
              <span12>Done</span12>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
