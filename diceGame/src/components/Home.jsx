import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
  return (
    <div className="max-w-[1180px] h-screen  flex mx-auto items-center justify-center">
      <img src="./images/dices.png" />
      <div>
        <div className="text-8xl font-extrabold whitespace-nowrap ">
          DICE GAME
        </div>
        <button onClick={()=>navigate("/gameScreen")} className="bg-black h-14 text-xl pt-2 pl-4 pb-2 pr-4 min-w-[220px] text-white cursor-pointer  font-bold mt-4 hover:bg-white hover:text-black hover: scale-100 border-1 outline transition ease-in delay-75">
          Play Now
        </button>
      </div>
    </div>
  );
}

export default Home;
