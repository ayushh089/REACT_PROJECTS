import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        if (v == 100) {
          clearInterval(interval);
          return v;
        }
        return v+1;
      });
    }, 100);
  }, []);
  return (
    <>
      <span className="flex justify-center">Progress Bar</span>
      <ProgressBar value={value} />
    </>
  );
}

export default App;
