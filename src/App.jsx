import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Academics from './Academics';
import Athletics from './Athletics';
import Application from './pages/Application';
import Register from './pages/Register';
import Login from './pages/Login';
import Notfound from './Notfound'; 
import Navigation from './Navigation';
import Roster from './roster';
import Timings from './Schedule';
import University from './pages/University';

function App() {
  return (
    <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/athletics' element={<Athletics />}/>
        <Route path='/roster' element={<Roster/>}/>
        <Route path='/schedule' element={<Timings/>}/>
        <Route path='/application' element={<Application />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/schedule' element={<Timings/>}/>
        <Route path='/university' element={<University/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
