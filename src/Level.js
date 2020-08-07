import React, { createRef, useState, useEffect } from "react";
import "./Level.css";
import Lock from "./Lock";
import Nav from "./Nav";
import Timer from "./Timer";

const Level = ({ level, levels, setLevel }) => {
  const levelData =
    level >= levels.length
      ? { hint: "", puzzle: [], completed: 4 }
      : levels[level];
  const { completed, inlay, puzzle } = levelData;
  const [showHint, setShowHint] = useState(0);
  const [lockStatus, setLockStatus] = useState("locked");
  const [inputStates, setInputStates] = useState([]);
  const [isActive, setIsActive] = useState(true);
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
          setIsActive={setIsActive}
          setLevel={setLevel}
          setLockStatus={setLockStatus}
          showHint={showHint}
          setShowHint={setShowHint}
        />
        <div id="title">
          <span role="img" aria-label="smiley">
            🤓 🤪 🤓 🤪 🤓 🤪 🤓
          </span>
        </div>
        <div id="boxes" className="won">
          Congratulations!
          <br />
          You completed all the challenges!
        </div>
        <Timer isActive={isActive} />
      </>
    );
  }
  return (
    <>
      <Nav
        level={level}
        levels={levels}
        setInputStates={setInputStates}
        setIsActive={setIsActive}
        setLevel={setLevel}
        setLockStatus={setLockStatus}
        showHint={showHint}
        setShowHint={setShowHint}
      />
      <div id="title">{image ? <img src={image} alt={title} /> : title}</div>
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
                key={"level" + level + "-input" + (completed + i)}
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
                    setIsActive,
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
          setIsActive={setIsActive}
          setLevel={setLevel}
          setLockStatus={setLockStatus}
          setShowHint={setShowHint}
        ></Lock>
        <Timer isActive={isActive} />
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
  setIsActive,
  setLockStatus
) => {
  const states = [...inputStates];
  if (
    puzzle[completed + i].toString().toUpperCase() ===
    inputRefs[i].current.value.toUpperCase()
  ) {
    states[i] = "correct";
    const findIncorrect = inputRefs.findIndex(
      (input, i) => states[i] !== "correct"
    );
    if (findIncorrect !== -1) {
      inputRefs[findIncorrect].current.focus();
    } else {
      inputRefs.forEach((input) => input.current.blur());
    }
  } else {
    states[i] = "incorrect";
  }
  setInputStates(states);

  let trues = 0;
  if (states.length === puzzle.length - completed) {
    trues = states.reduce(function (accumulator, state) {
      if (state === "correct") {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
  }
  if (trues === puzzle.length - completed) {
    setIsActive(false);
    setLockStatus("unlocked");
  } else {
    setIsActive(true);
    setLockStatus("locked");
  }
};

// Go to next level.
export const GotoNextLevel = (
  level,
  setInputStates,
  setIsActive,
  setLevel,
  setLockStatus,
  setShowHint
) => {
  setLockStatus("locked");
  setShowHint(0);
  setLevel(level + 1);
  setInputStates([]);
  setIsActive(true);
};

export default Level;
