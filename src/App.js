import './App.css';
//import 
import react, { useEffect, useState } from 'react';

const styles1 = {color:'blue', fontSize: '30px'};
const styles2 = {color:'green', fontSize: '30px'};
let text = "Сразу чтото написано!";

function App(props) {

  const [number, setNumber] = useState(0);
  const [intnumber, setIntNumber] = useState(0);

  useEffect(() => {setIntNumber(Math.floor(Math.random() * 1000))},[]);//
  useEffect(() => {setNumber(Math.random() * 1000)});//,[] веселуха

  return (
    <div className="App">
      <header className="App-header">
        <h1>Заголовок - {props.title}</h1>
        <div> oписание - {props.description}</div>
        <h1 className='red big'>Новые числа!</h1>
        <h2 style={styles1}>целое - {intnumber}</h2>
        <h2 style={styles2}>всякое - {number}</h2>
        <input type='text' placeholder={text} text={text}></input>
        <button className='batton' onClick={()=> {text = ""}}>Clear</button>
      </header>
    </div>
  );
}

export default App;
