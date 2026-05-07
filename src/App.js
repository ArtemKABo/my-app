import './App.css';
import List from './LermProps';
import MoreAny from './MoreAny';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Site</h1>
        <MyComponent />
        <MyComponent2/>
        <List items = {['I0', 'I1', 'I2']}/>
        <MoreAny propVal = {'prop volue 1'}/>
      </header>
    </div>
  );
}

export default App;
