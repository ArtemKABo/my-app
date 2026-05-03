import './App.css';
import UserList from './UserList';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Site</h1>
        <UserList/>
        <MyComponent prop1={'props-1'} prop2={'props-2'} />
      </header>
    </div>
  );
}

export default App;
