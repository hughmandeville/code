import React from "react";
import { GotoNextLevel } from "./Level";
import "./Nav.css";

const Nav = ({
  level,
  levels,
  setInputStates,
  setIsActive,
  setLevel,
  setLockStatus,
  setShowHint,
}) => {
  const percentComplete = Math.round((level / levels.length) * 100) + "%";
  if (level === levels.length) {
    return (
      <>
        <nav id="nav">
          <a href={window.location.pathname}>Code</a>
        </nav>
        <div id="completion_line" style={{ width: "100%" }}></div>
      </>
    );
  }
  return (
    <>
      <nav id="nav">
        <a href={window.location.pathname}>Code</a>
        <div id="level">
          Level {level + 1} / {levels.length}
        </div>
        <div
          id="cheat"
          onClick={() => {
            GotoNextLevel(
              level,
              setInputStates,
              setIsActive,
              setLevel,
              setLockStatus,
              setShowHint
            );
          }}
        >
          &gt;
        </div>
        <div
          id="hint_button"
          onClick={() => {
            setShowHint(true);
          }}
        >
          hint
        </div>
      </nav>
      <div id="completion_line" style={{ width: percentComplete }}></div>
    </>
  );
};

export default Nav;
