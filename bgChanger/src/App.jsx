import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 p-10 rounded-lg">
          <div className="fixed flex flex-wrap gap-3 bg-white justify-center px-3 py-2 rounded-3xl">
            <button
              className="bg-red-600 text-white shadow-md p-3 rounded-xl"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="bg-yellow-500 text-white shadow-md p-3 rounded-xl"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="bg-cyan-600 text-white shadow-md p-3 rounded-xl"
              onClick={() => setColor("cyan")}
            >
              Cyan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
