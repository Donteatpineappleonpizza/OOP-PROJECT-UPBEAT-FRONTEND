import React, { useEffect, useState } from "react";
import '../Countdown/countdown.css'

function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: "00",
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

  function initializeClock(endtime) {
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      setTimeLeft({
        minutes: t.minutes.toString().padStart(2, "0"),
        seconds: t.seconds.toString().padStart(2, "0"),
      });

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);
  }

  useEffect(() => {
    initializeClock(new Date(Date.now() + 45 * 60 * 1000));
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

export default CountDown;
