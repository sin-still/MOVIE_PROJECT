import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import User from './pages/User';
import Movies from './pages/Movies';
import Users from './pages/Users';
import About from './pages/About';
import Footer from './components/Footer';


function App() {
    
  return (
    <div className="App" >
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/movies' element={ <Movies/> } />
            <Route path='/user' element= { <User/> } >
            </Route>
            <Route path='/users/:id' element= { <Users/> }>  </Route>
            <Route path='/about/:id' element= { <About/> }>  </Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
