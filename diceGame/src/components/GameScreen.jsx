import React, { useState } from "react";

function GameScreen() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(0);
  const [betValue, setBetValue] = useState(-1); //betamt
  const [currNumber, setCurrNumber] = useState(1); //dice
  const checkWin = (value) => {
    console.log("betValue " + betValue);
    console.log("currdice "+value);
    if (value === betValue) {
      setScore( score + betValue);
    }
  };
  const genReandomNumber = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setCurrNumber(value);
    // console.log("random "+value);
    checkWin(value);
  };
  const numberSelected = (i) => {
    console.log(i);
    setBetValue(i);
  };
  return (
    <div>
      <div className="mt-10 ml-10 -100 mr-10 flex items-center justify-between  ">
        <div className="text-center max-w-[200px]">
          <div className="text-8xl font-bold  ">{score}</div>
          <p className="font-bold text-xl"> Total Score</p>
        </div>
        <div className="flex gap-6 pr-20">
          {numbers.map((i) => {
            return (
              <div key={i}
                onClick={() => numberSelected(i)}
                className="w-24 h-24 cursor-pointer outline font-bold  text-2xl grid place-items-center transition ease-in-out delay-75 hover: hover:-translate-y-1 hover:scale-110  duration-75 "
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center mt-48">
        <div onClick={() => genReandomNumber()} className="cursor-pointer">
          <img src={`/images/${currNumber}.jpg`} className="h-56 w-56" />
        </div>
        <p className="font-bold text-2xl h-9">
          Spin the dice and try your luck!
        </p>
      </div>
    </div>
  );
}

export default GameScreen;
