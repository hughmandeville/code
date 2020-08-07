import React from "react";

import { GotoNextLevel } from "./Level";
import "./Lock.css";

const Lock = ({
  level,
  levels,
  lockStatus,
  setInputStates,
  setIsActive,
  setLevel,
  setLockStatus,
  setShowHint,
}) => {
  if (lockStatus === "locked") {
    return (
      <div id="lock_box" key="lockbox">
        <span id="lock" className="material-icons">
          lock
        </span>
      </div>
    );
  } else if (level === levels.length - 1) {
    // FINISHED
    return (
      <div className="finished">
        <span role="img" aria-label="smiley" className="exclamation">
          🤓 🤪 🤓 😝 🤓 🤪 🤓
        </span>
        <br />
        <div className="exclamation">Congratulations!</div>
        You completed all the challenges!
      </div>
    );
  } else {
    return (
      <div
        id="lock_box"
        key="lockbox"
        onClick={() => {
          GotoNextLevel(
            level,
            levels,
            setInputStates,
            setIsActive,
            setLevel,
            setLockStatus,
            setShowHint
          );
        }}
      >
        <span id="lock" className="material-icons open">
          lock_open
        </span>
        <div className="next_text">next&nbsp;&gt;&gt;</div>
      </div>
    );
  }
};

export default Lock;
