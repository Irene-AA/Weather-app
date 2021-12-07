import React from 'react'
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Main from './components/Main.js'
import Home from './components/Home.js'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/signup2' element={<Signup/>}/>
         <Route path='/main' element={<Main/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/' element={<Home/>} />
         <Route />
         <Route />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
