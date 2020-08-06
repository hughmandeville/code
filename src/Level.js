import React, { createRef, useState, useEffect } from "react";
import "./Level.css";
import Nav from "./Nav";
import Lock from "./Lock";

const Level = ({ level, levels, setLevel }) => {
  const levelData =
    level >= levels.length
      ? { hint: "", puzzle: [], completed: 4 }
      : levels[level];
  const { completed, inlay, puzzle } = levelData;
  const [showHint, setShowHint] = useState(0);
  const [lockStatus, setLockStatus] = useState("locked");
  const [inputStates, setInputStates] = useState([]);
  const inputRefs = [];
  const { hint, image, title } = levelData;

  useEffect(() => {
    if (inputStates.length === 0 && document.querySelector("input") != null) {
      document.querySelector("input").focus();
    }
  }, [inputStates]);

  if (level === levels.length) {
    return (
      <>
        <Nav
          level={level}
          levels={levels}
          setInputStates={setInputStates}
          setLevel={setLevel}
          setLockStatus={setLockStatus}
          showHint={showHint}
          setShowHint={setShowHint}
        />
        <div id="title">🤓 🤪 🤓 🤪 🤓 🤪 🤓</div>
        <div id="boxes" className="won">
          Congratulations you completed all the challenges!
        </div>
      </>
    );
  }
  return (
    <>
      <Nav
        level={level}
        levels={levels}
        setInputStates={setInputStates}
        setLevel={setLevel}
        setLockStatus={setLockStatus}
        showHint={showHint}
        setShowHint={setShowHint}
      />
      <div id="title">{image ? <img src={image} alt="" /> : title}</div>
      <div id="hint">{showHint ? <span>{hint}</span> : ""}</div>
      <div id="boxes">
        {puzzle.slice(0, completed).map((n, i) => (
          <div key={"box" + i} className="box">
            {n}
            {inlay != null && inlay.length >= i ? (
              <div className="inlay">{inlay[i]}</div>
            ) : (
              ""
            )}
          </div>
        ))}
        {puzzle.slice(completed).map((n, i) => {
          const newRef = createRef();
          inputRefs.push(newRef);
          return (
            <div key={"box" + (completed + i)} className="input_box">
              <input
                key={"level" + level + "-input" + i}
                ref={newRef}
                style={
                  inputStates.length >= i && inputStates[i] === "correct"
                    ? { border: "1px solid green" }
                    : {}
                }
                type="text"
                className="input"
                onChange={(e) => {
                  handleInputChange(
                    completed,
                    i,
                    inputRefs,
                    inputStates,
                    puzzle,
                    setInputStates,
                    setLockStatus
                  );
                }}
              />
              {inlay != null && inlay.length >= i ? (
                <div className="inlay">{inlay[completed + i]}</div>
              ) : (
                ""
              )}
            </div>
          );
        })}
        <Lock
          level={level}
          lockStatus={lockStatus}
          setInputStates={setInputStates}
          setLevel={setLevel}
          setLockStatus={setLockStatus}
          setShowHint={setShowHint}
        ></Lock>
      </div>
    </>
  );
};

// Called when input text is changed.
const handleInputChange = (
  completed,
  i,
  inputRefs,
  inputStates,
  puzzle,
  setInputStates,
  setLockStatus
) => {
  const states = [...inputStates];
  if (
    puzzle[completed + i].toString().toUpperCase() ===
    inputRefs[i].current.value.toUpperCase()
  ) {
    states[i] = "correct";
  } else {
    states[i] = "incorrect";
  }
  setInputStates(states);

  let solved = false;
  if (states.length === puzzle.length - completed) {
    solved = states.reduce(function (accumulator, state) {
      if (accumulator === false) {
        return false;
      }
      if (state === "correct") {
        return true;
      }
      return false;
    }, true);
  }
  if (solved) {
    setLockStatus("unlocked");
  } else {
    setLockStatus("locked");
  }
};

// Go to next level.
export const GotoNextLevel = (
  level,
  setInputStates,
  setLevel,
  setLockStatus,
  setShowHint
) => {
  setLockStatus("locked");
  setShowHint(0);
  setLevel(level + 1);
  setInputStates([]);
};

export default Level;
