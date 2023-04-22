
import './App.css';
import Navbar from './components/Navbar';
import { Route,  Routes } from 'react-router-dom';
import Home from './Page/Home';
import Cart from './Page/Cart';
import { useState } from 'react';
import Login from './Page/Login';
import Signup from './Page/Signup';


function App() {




 



  return (
    <div className="App">
     <div>
      <Navbar/>
     </div>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
     </Routes>


      



    </div>
  );
}

export default App;
