import React, { useState, useEffect } from "react";
import useSound from "use-sound";

function GameScreen2() {
  const numbers = ["<7", "=7", ">7"];
  const [playSound] = useSound("/audio/roll.mp3");
  const [coins, setCoins] = useState(2000);
  const [betValue, setBetValue] = useState(-1); //betamt
  const [currDiceNumber1, setCurrDiceNumber1] = useState(1); //dice
  const [currDiceNumber2, setCurrDiceNumber2] = useState(1); //dice
  const [sumDiceNumbers, setSumDiceNumbers] = useState(null);
  const [betAmount, setBetAmount] = useState(500);

  const diceImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  useEffect(() => {
    preloadImages(diceImages);
  }, []);

  const preloadImages = (imageList) => {
    imageList.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
    });
  };
  const checkWin = (valueDice1, valueDice2) => {
    if (betValue === 0) {
      if (valueDice1 + valueDice2 < 7) {
        setCoins(coins + betAmount * 2);
      } else {
        setCoins(coins - betAmount);
      }
    } else if (betValue === 1) {
      if (valueDice1 + valueDice2 === 7) {
        setCoins(coins + betAmount * 3);
      } else {
        setCoins(coins - betAmount);
      }
    } else if (betValue === 2) {
      if (valueDice1 + valueDice2 > 7) {
        setCoins(coins + betAmount * 2);
      } else {
        setCoins(coins - betAmount);
      }
    }
  };

  const genReandomNumber = () => {
    if (betValue === -1) {
      return;
    }

    playSound();

    let valueDice1, valueDice2;

    const rollDice = () => {
      return new Promise((resolve) => {
        let counter = 0;
        const rollInterval = setInterval(() => {
          setCurrDiceNumber1(((counter + 1) % 6) + 1);
          setCurrDiceNumber2(((counter + 2) % 6) + 1);
          ++counter;
        }, 10);

        setTimeout(() => {
          clearInterval(rollInterval);
          resolve();
        }, 900);
      });
    };

    const generateRandomNumbers = () => {
      return new Promise((resolve) => {
        valueDice1 = Math.floor(Math.random() * 6) + 1;
        valueDice2 = Math.floor(Math.random() * 6) + 1;
        setCurrDiceNumber1(valueDice1);
        setCurrDiceNumber2(valueDice2);
        resolve();
      });
    };
    const calculateSumAndCheckWin = () => {
      const sum = valueDice1 + valueDice2;
      setSumDiceNumbers(sum);
      checkWin(valueDice1, valueDice2);
    };

    rollDice().then(generateRandomNumbers).then(calculateSumAndCheckWin);
  };

  const addBetAmount = () => {
    if (coins > betAmount) setBetAmount(betAmount + 500);
  };
  const subBetAmount = () => {
    betAmount > 500 ? setBetAmount(betAmount - 500) : "";
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
    <div className="">
      <div className="mt-10 ml-10 -100 mr-10 flex items-center md:justify-between  ">
        <div className="text-center max-w-[200px]">
          <div className="md:text-8xl font-bold text-4xl">{coins}</div>
          <p className="font-bold text-xl"> Total coins</p>
        </div>
        <div className="flex gap-6 pr-20 ">
          {numbers.map((number, index) => (
            <div
              key={index}
              onClick={() => numberSelected(number)}
              className={` w-16 h-16 ml-8 md:w-24 md:h-24 cursor-pointer outline font-bold text-2xl grid place-items-center transition ease-in-out hover:-translate-y-5 scale-110 delay-75  ${
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
        <div
          onClick={() => betValue !== -1 && coins > 0 && genReandomNumber()}
          className="cursor-pointer flex"
        >
          <img src={`/images/${currDiceNumber1}.jpg`} className="h-56 w-56" />
          <img src={`/images/${currDiceNumber2}.jpg`} className="h-56 w-56" />
        </div>
        <p className="font-bold text-2xl h-9">
          {betValue !== -1
            ? "Spin the dice and try your luck!"
            : "Please select a bet value"}
        </p>
        <div className="w-36 h-36 outline-dashed mt-12 grid place-items-center font-bold text-8xl">
          {sumDiceNumbers !== null ? sumDiceNumbers : ""}
        </div>
        <div className="flex mt-8">
          <button
            onClick={() => subBetAmount()}
            className="w-16 h-16 bg-blue-400 outline hover:bg-blue-500 text-white font-bold rounded-md shadow-md transition duration-300"
          >
            -
          </button>
          <p className="w-48 h-16 grid place-items-center text-3xl bg-blue-400 outline text-white font-extrabold rounded-md shadow-md">
            {betAmount}
          </p>
          <button
            onClick={() => addBetAmount()}
            className="w-16 h-16 bg-blue-400 outline hover:bg-blue-500 text-white font-bold rounded-md shadow-md transition duration-300"
          >
            +
          </button>
        </div>
        <div>
          <p className="text-3xl mt-4 font-extrabold">Bet Amount</p>
        </div>
      </div>
    </div>
  );
}

export default GameScreen2;
