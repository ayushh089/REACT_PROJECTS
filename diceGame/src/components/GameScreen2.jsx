import React, { useState, useEffect } from "react";
import useSound from 'use-sound';

function GameScreen2() {
  const numbers = ["<7", "=7", ">7"];
  const [playSound] = useSound('/audio/roll.mp3');
  const [score, setScore] = useState(1000);
  const [betValue, setBetValue] = useState(-1); //betamt
  const [currDiceNumber1, setCurrDiceNumber1] = useState(1); //dice
  const [currDiceNumber2, setCurrDiceNumber2] = useState(1); //dice
  const [sumDiceNumbers, setSumDiceNumbers] = useState(null);

  const checkWin = (valueDice1, valueDice2) => {
    console.log("betValue " + betValue);
    console.log("currdice1 " + valueDice1);
    console.log("currdice2 " + valueDice2);
    if (betValue === 0) {
      if (valueDice1 + valueDice2 < 7) {
        setScore(score + 10);
      }
    } else if (betValue === 1) {
      if (valueDice1 + valueDice2 === 7) {
        setScore(score + 10);
      }
    } else if (betValue === 2) {
      if (valueDice1 + valueDice2 > 7) {
        setScore(score + 10);
      }
    }
  };

  const genReandomNumber = () => {
    if (betValue === -1) {
      return;
    }
playSound()
    let valueDice1;
    let valueDice2;

    const rollInterval = setInterval(() => {
      valueDice1 = Math.floor(Math.random() * 6) + 1;
      setCurrDiceNumber1(valueDice1);
      valueDice2 = Math.floor(Math.random() * 6) + 1;
      setCurrDiceNumber2(valueDice2);
    }, 50);

    setTimeout(() => {
      clearInterval(rollInterval);
      setTimeout(() => {
        const sum = valueDice1 + valueDice2;
        setSumDiceNumbers(sum);
      }, 85);

      checkWin(valueDice1, valueDice2);
    }, 1000);
  };

  const numberSelected = (i) => {
    if (i === ">7") {
      setBetValue(2);
    } else if (i === "<7") {
      setBetValue(0);
    } else {
      setBetValue(1);
    }
  };

  useEffect(() => {
    setSumDiceNumbers(null);
  }, [betValue]);

  return (
    <div>
      <div className="mt-10 ml-10 -100 mr-10 flex items-center justify-between sm:gap-16 ">
        <div className="text-center max-w-[200px]">
          <div className="text-8xl font-bold  ">{score}</div>
          <p className="font-bold text-xl"> Total Score</p>
        </div>
        <div className="flex gap-6 pr-20">
          {numbers.map((number, index) => (
            <div
              key={index}
              onClick={() => numberSelected(number)}
              className={`w-24 h-24 cursor-pointer outline font-bold text-2xl grid place-items-center transition ease-in-out hover:-translate-y-5 scale-110 delay-75  ${
                numbers[betValue] === number
                  ? "bg-indigo-200 -translate-y-1 scale-110 "
                  : ""
              }`}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <div onClick={() => betValue !== -1 && genReandomNumber()} className="cursor-pointer flex">
          <img src={`/images/${currDiceNumber1}.jpg`} className="h-56 w-56" />
          <img src={`/images/${currDiceNumber2}.jpg`} className="h-56 w-56" />
        </div>
        <p className="font-bold text-2xl h-9">
          {betValue !== -1 ? "Spin the dice and try your luck!" : "Please select a bet value"}
        </p>
      <div className="w-36 h-36 outline-dashed mt-12 grid place-items-center font-bold text-8xl">
        {sumDiceNumbers !== null ? sumDiceNumbers : ""}
      </div>
      </div>
    </div>
  );
}

export default GameScreen2;
