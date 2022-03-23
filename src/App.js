import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
     <Header></Header>
     <Shop></Shop>
     
    </div>
  );
}

export default App;
