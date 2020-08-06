import React, { useState } from "react";
import Level from "./Level";
import Timer from "./Timer";
import "./index.css";

const App = () => {
  const levels = getLevels();
  const [level, setLevel] = useState(0);
  return (
    <>
      <Level level={level} levels={levels} setLevel={setLevel} />
      <Timer />
    </>
  );
};

// construct array of levels.
function getLevels() {
  return [
    {
      name: "roman_numerals",
      puzzle: randSlice(
        [
          "I",
          "II",
          "III",
          "IV",
          "V",
          "VI",
          "VII",
          "VIII",
          "IX",
          "X",
          "XI",
          "XII",
          "XIII",
          "XIV",
        ],
        6
      ),
      hint: "togas",
      completed: 4,
    },
    {
      name: "square",
      puzzle: randSlice([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144], 6),
      hint: "square",
      completed: 3,
    },
    {
      name: "morse",
      puzzle: ["S", "O", "S"],
      inlay: ["...", "---", "..."],
      hint: "telegraph",
      completed: 0,
    },
    {
      name: "amscray",
      title: "amscray",
      puzzle: ["S", "C", "R", "A", "M"],
      hint: "Pig Latin",
      completed: 0,
    },
    {
      name: "ixnay",
      title: "ixnay",
      puzzle: ["N", "I", "X"],
      hint: "Pig Latin",
      completed: 0,
    },
    {
      name: "baked",
      title: "Baked in Cockney",
      puzzle: ["Q", "U", "E", "E", "N"],
      hint: "Baked Bean",
      completed: 0,
    },
    {
      name: "barney",
      title: "Barney in Cockney",
      puzzle: ["T", "R", "O", "U", "B", "L", "E"],
      hint: "Barney Rubble",
      completed: 0,
    },
    {
      name: "china",
      title: "China in Cockney",
      puzzle: ["M", "A", "T", "E"],
      hint: "China Plate",
      completed: 0,
    },
    {
      name: "olavtine",
      puzzle: ["O", "L", "A", "V", "T", "I", "N", "E"],
      inlay: ["B", "I", "N", "Y", "G", "V", "A", "R"],
      hint: "ROT13",
      completed: 2,
    },
    {
      name: "ascii",
      puzzle: ["S", "W", "O", "R", "D", "F", "I", "S", "H"],
      inlay: [83, 87, 79, 82, 68, 70, 73, 83, 72],
      hint: "ASCII art",
      completed: 1,
    },
    {
      name: "rgb",
      image: "/code/img_red.png",
      puzzle: ["FF", "00", "00"],
      hint: "RGB",
      completed: 0,
    },
    {
      name: "phone",
      puzzle: [7, 8, 6, 4, 6, 4],
      inlay: ["Q", "U", "O", "H", "O", "G"],
      hint: "Spongebob's flip phone",
      completed: 2,
    },
    {
      name: "emojis",
      puzzle: ["🙂", "🙃", "🙂", "🙃", "🙂", "🙃"],
      hint: "cut copy",
      completed: 4,
    },
    {
      name: "fibonacci",
      puzzle: randSlice(getFibonacciSequence(12), 6),
      hint: "Fibonacci",
      completed: 4,
    },
    {
      name: "pi",
      puzzle: [3, 1, 4, 1, 5, 9],
      hint: "have some pie",
      completed: 4,
    },
    {
      name: "prime",
      puzzle: randSlice(
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53],
        6
      ),
      hint: "Amazon prime",
      completed: 4,
    },
    {
      name: "binary",
      puzzle: randSlice(
        ["000", "001", "010", "011", "100", "101", "110", "111"],
        6
      ),
      hint: "binary",
      completed: 3,
    },
    {
      name: "days_of_week",
      puzzle: randSlice(
        ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S"],
        6
      ),
      hint: "days of week",
      completed: 4,
    },
    {
      name: "numbers",
      puzzle: randSlice(["Z", "O", "T", "T", "F", "F", "S", "S", "E", "N"], 6),
      hint: "numbers",
      completed: 4,
    },
    {
      name: "months",
      puzzle: randSlice(
        [
          "J",
          "F",
          "M",
          "A",
          "M",
          "J",
          "J",
          "A",
          "S",
          "O",
          "N",
          "D",
          "J",
          "F",
          "M",
          "A",
          "M",
          "J",
          "J",
          "A",
          "S",
          "O",
          "N",
          "D",
        ],
        6
      ),
      hint: "months",
      completed: 4,
    },
    {
      name: "lost",
      image: "/code/img_lost.jpg",
      puzzle: ["4", "8", "15", "16", "23", "42"],
      hint: "TV show from mid 2000s",
      completed: 4,
    },
    /*
    {
      name: "atbash",
      puzzle: ["B", "U", "P", "K", "I", "S"],
      inlay: ["Y", "F", "K", "P", "R", "H"],
      hint: "Atbash",
      completed: 3,
    },
    {
      name: "log",
      puzzle: [2, 7, 1, 8, 2, 8],
      hint: "timber",
      completed: 4,
    },
    */
  ];
}

// Get random slice of N elements.
const randSlice = (a, n) => {
  if (a.length <= n) {
    return a;
  }
  const start = Math.floor(Math.random() * (a.length - n));
  return a.slice(start, start + n);
};

// Get sequence of N Fibonacci numbers.
// 0 1 1 2 3 5 8 13 21 34 55 89 ...
const getFibonacciSequence = (n) => {
  return [...Array(n - 2)].reduce(
    (a) => {
      a.push(a[a.length - 2] + a[a.length - 1]);
      return a;
    },
    [0, 1]
  );
};

export default App;
