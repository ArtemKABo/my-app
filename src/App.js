import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';

function App(props) {

  const [number, setNumber] = useState(0);
  const [intnumber, setIntNumber] = useState(0);

  useEffect(() => {setIntNumber(Math.floor(Math.random() * 1000))});//,[]
  useEffect(() => {setNumber(Math.random() * 1000)});//,[]


  return (
    <div className="App">
      <header className="App-header">
        <h1>Заголовок - {props.title}</h1>
        <div> oписание - {props.description}</div>
        <h1>Новые числа!</h1>
        <h2>целое - {intnumber}</h2>
        <h2>всякое - {number}</h2>
      </header>
    </div>
  );
}

export default App;
