import Display from "./Display";
import BreakControl from "./BreakControl";
import SessionControl from "./SessionControl";
import StartStop from "./StartStop";

import { useState, useEffect } from "react";

const Timer = () => {
  const [session, setSession] = useState(3000); //this will be 1500000 by default
  const [breakLength, setBreakLength] = useState(6000); //this will be 300000 by default

  const [currentTime, setCurrentTime] = useState(session);
  const [formattedCurrentTime, setFormattedCurrentTime] = useState("");
  const [sessionIsOn, setSessionIsOn] = useState(false);
  const [breakIsOn, setBreakIsOn] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const increaseSession = () => {
    if (!sessionIsOn) {
      setSession(session + 60000);
      setCurrentTime(session + 60000);
    }
  };

  const decreaseSession = () => {
    if (!sessionIsOn) {
      setSession(session - 60000);
      setCurrentTime(session - 60000);
    }
  };

  const increaseBreak = () => {
    if (!sessionIsOn) {
      setBreakLength(breakLength + 60000);
      //setCurrentTime(session + 60000);
    }
  };

  const decreaseBreak = () => {
    if (!sessionIsOn) {
      setBreakLength(breakLength - 60000);
      //setCurrentTime(session + 60000);
    }
  };

  const startStop = () => {
    if (!sessionIsOn) {
      setSessionIsOn(true);
    } else {
      setSessionIsOn(false);
    }
  };

  const reset = () => {
    setCurrentTime(session);
  };

  //converts milliseconds to minutes and seconds 00:00
  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed();
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  useEffect(() => {
    if (sessionIsOn) {
      let interval = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1000);
      }, 1000);

      //   setTimeout(()=> setCurrentTime(breakLength), session+1000);
      //   setTimeout(() => clearInterval(interval), session+breakLength);
    } else {
      clearInterval(intervalId);
    }
  }, [sessionIsOn, breakIsOn]);

  useEffect(() => {
    setFormattedCurrentTime(formatTime(currentTime));

    if (currentTime < 0 && sessionIsOn) {
      setCurrentTime(breakLength);
      setSessionIsOn(false);
      setBreakIsOn(true);
    }
    if (currentTime < 0 && breakIsOn) {
      setCurrentTime(session);
      setSessionIsOn(true);
      setBreakIsOn(false);
    }
  }, [currentTime, session]);

  return (
    <div id="timer">
      <Display formattedCurrentTime={formattedCurrentTime} />
      <BreakControl
        breakLength={breakLength}
        increaseBreak={increaseBreak}
        decreaseBreak={decreaseBreak}
      />
      <SessionControl
        session={session}
        increaseSession={increaseSession}
        decreaseSession={decreaseSession}
      />
      <StartStop startStop={startStop} reset={reset} />
    </div>
  );
};

export default Timer;
