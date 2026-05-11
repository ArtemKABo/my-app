import './App.css';
import MyComponent from './MyComponent';
import MyInput from './Render';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Site</h1>
        <MyInput label={'Условный рендеринг'}/>
      </header>
    </div>
  );
}

export default App;
