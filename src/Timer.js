import Display from "./Display";
import BreakControl from "./BreakControl";
import SessionControl from "./SessionControl";
import StartStop from "./StartStop";

import { useState, useEffect } from "react";

const Timer = () => {
  const defaultSessionLength = 1500000; //this will be 1500000 by default
  const defaultBreakLength = 300000; //this will be 300000 by default

  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [breakLength, setBreakLength] = useState(defaultBreakLength);

  const [currentTime, setCurrentTime] = useState(sessionLength);
  const [formattedCurrentTime, setFormattedCurrentTime] = useState("");

  const [timeIsOn, setTimeIsOn] = useState(false);
  const [sessionIsOn, setSessionIsOn] = useState(false);
  const [breakIsOn, setBreakIsOn] = useState(false);
  const [timerLabel, setTimerLabel] = useState("Session");
  const [intervalId, setIntervalId] = useState(0);

  const increaseSession = () => {
    if (!timeIsOn && sessionLength < 3600000) {
      setSessionLength(sessionLength + 60000);
      setCurrentTime(sessionLength + 60000);
    }
  };

  const decreaseSession = () => {
    if (!timeIsOn && sessionLength > 60000) {
      setSessionLength(sessionLength - 60000);
      setCurrentTime(sessionLength - 60000);
    }
  };

  const increaseBreak = () => {
    if (!timeIsOn && breakLength < 3600000) {
      setBreakLength(breakLength + 60000);
    }
  };

  const decreaseBreak = () => {
    if (!timeIsOn && breakLength > 60000) {
      setBreakLength(breakLength - 60000);
    }
  };

  const startStop = () => {
    if (!timeIsOn) {
      setTimeIsOn(true);
      setSessionIsOn(true);
    } else {
      setTimeIsOn(false);
    }
  };

  const reset = () => {
    if (timeIsOn) {
      setTimeIsOn(false);
    }
    setSessionLength(defaultSessionLength);
    setBreakLength(defaultBreakLength);
    setCurrentTime(defaultSessionLength);
  };

  //converts milliseconds to minutes and seconds 00:00
  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed();
    return minutes.toString().padStart(2, "0") + ":" + seconds.padStart(2, "0");
  };

  const playSound = () => {
    const audio = document.getElementById("beep");
    const sound = audio;
    sound.play();
  };

  useEffect(() => {
    if (timeIsOn) {
      let interval = setInterval(() => {
        setCurrentTime((currentTime) => currentTime - 1000);
      }, 1000);
      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
    }
  }, [timeIsOn]);

  useEffect(() => {
    setFormattedCurrentTime(formatTime(currentTime));

    if (currentTime < 0 && sessionIsOn) {
      playSound();
      setCurrentTime(breakLength);
      setSessionIsOn(false);
      setBreakIsOn(true);
      setTimerLabel("Break");
    }
    if (currentTime < 0 && breakIsOn) {
      playSound();
      setCurrentTime(sessionLength);
      setSessionIsOn(true);
      setBreakIsOn(false);
      setTimerLabel("Session");
    }
  }, [currentTime]);

  return (
    <div id="timer">
      <Display
        formattedCurrentTime={formattedCurrentTime}
        timerLabel={timerLabel}
      />
      <BreakControl
        breakLength={breakLength}
        increaseBreak={increaseBreak}
        decreaseBreak={decreaseBreak}
      />
      <SessionControl
        session={sessionLength}
        increaseSession={increaseSession}
        decreaseSession={decreaseSession}
      />
      <StartStop startStop={startStop} reset={reset} />
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        type="audio/mpeg"
      />
    </div>
  );
};

export default Timer;
