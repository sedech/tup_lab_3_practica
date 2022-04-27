import './App.css';
import { useState } from "react";
import Select from './components/Select';


function App() {
  const randomNumber = () => Math.round(Math.random());
  const [input1, setInput1] = useState(randomNumber());
  const [checked1, setChecked1] = useState(0);
  const [result, setResult] = useState(0);
 
  
  const handleChangeInput = (e) => {
    Number(e.target.value) === 1
    ? setInput1(Number(e.target.value)) 
    : setInput1(0);
  };
  
  const handleCheckbox = () => {
    checked1 ? setChecked1(0) : setChecked1(1);
  };




  return (
    <div className="App">
      <div>
        <label for="input1">Entrada 1:</label>
        <input type="number" id="input1" onChange={handleChangeInput} value={input1} />
      </div>
      <div>
        <label><input type="checkbox" onChange={handleChangeInput} /> Entrada 2</label>
        <Select input1={input1} checked1={checked1} result={result} setResult={setResult}/>
      </div>
      <div>
        <label for="selectGate">Compuerta lógica:</label>
        <select id="selectGate"></select>
      </div>
        <div><span>Salida: {result}</span></div>
    </div>
  );
}

export default App;
