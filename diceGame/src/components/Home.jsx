import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1180px] h-screen flex flex-col md:flex-row mx-auto justify-center md:items-center text-center">
      <img src="./images/dices.png" className="h-80 w-auto mt-16" alt="Dice Game Image" />
      <div className="ml-6 md:ml-24 mt-4 md:mt-0">
        <div className="text-4xl md:text-8xl font-extrabold whitespace-nowrap">
         SEVEN ROLLS
        </div>
        <button
          onClick={() => navigate("/gameScreen")}
          className="bg-black h-14 text-xl pt-2 pl-4 pb-2 pr-4 min-w-[220px] text-white cursor-pointer font-bold mt-4 hover:bg-white hover:text-black hover:scale-100 border-1 outline transition ease-in delay-75"
        >
          Play Now
        </button>
      </div>
    </div>
  );
}

export default Home;
