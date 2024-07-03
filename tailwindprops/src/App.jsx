import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
// import Card from "./components/Card"
function App() {
  return (
    <>
      <Card userName="Ayush" vh2={[1,2]}/><br></br>
      <Card userName="Pooja"/>
    </>
  );
}

export default App;
