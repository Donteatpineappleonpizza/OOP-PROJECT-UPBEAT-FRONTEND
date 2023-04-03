import React, { useEffect, useState } from "react";
import '../Countdown/countdown.css'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: "05",
    seconds: "00",
  });

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    return {
      total: t,
      minutes: minutes,
      seconds: seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = parseInt(prev.minutes) * 60 + parseInt(prev.seconds);
        const newTotalSeconds = totalSeconds - 1;
        const newMinutes = Math.floor(newTotalSeconds / 60).toString().padStart(2, "0");
        const newSeconds = (newTotalSeconds % 60).toString().padStart(2, "0");
        if (newTotalSeconds <= 0) {
          clearInterval(intervalId);
        }
        return {
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
}, []);


  return (
    <div className="continer centerIt">
      <div>
        <div className="counter">
          <div className="minutes">
            <div className="value">{timeLeft.minutes}</div>
          </div>
          <div className="seconds">
            <div className="value">{timeLeft.seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
