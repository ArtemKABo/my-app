import './App.css';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Site</h1>
        <MyComponent />
        <MyComponent2/>
      </header>
    </div>
  );
}

export default App;
