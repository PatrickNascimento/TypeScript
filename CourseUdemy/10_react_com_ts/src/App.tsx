import React from "react";
import "./App.css";

function App() {
  // 1 Variaveis

  const name: string = "Patrick";
  const age: number = 41;
  
  const isworking: boolean = true;

  return (
    <div className="App">
      <h1>React com TypeScript ®</h1>
      <h2>{name}</h2>
      <p>{age}</p>
      {isworking && (
        <div>
          <p>Está trabalhando</p>
        </div>
      )}
    </div>
  );
}

export default App;
