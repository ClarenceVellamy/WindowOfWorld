import './App.css';

import { Routes, Route } from 'react-router-dom'

import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import SignIn from './components/SignIn';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/auth' element={<Landing/>} />
        <Route exact path='/signin' element={<SignIn/>} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
