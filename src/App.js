import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';


function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Main />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
