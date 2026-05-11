//import { ,} from 'react-router';
import { Routes, Link, Route} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Contacts from './Contacts/Contacts';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Site</h1>
          <div className='router-nav-container'>
            <nav >
              <div className='nav-menu'>
                <div>
                  <Link to={'/Home'} className='link'>Домой</Link>
                </div> 
                <div>
                  <Link to={'/Contacts'} className='link'>Контакты</Link>
                </div> 
                <div>
                  <Link to={'/About'} className='link'>О нас</Link>
                </div>
              </div>
            </nav>
          </div>
      </header>
      <body>
          <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Contacts' element={<Contacts/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
      </body>
    </div>
  );
}

export default App;
