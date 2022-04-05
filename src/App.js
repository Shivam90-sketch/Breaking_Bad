import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleCharacter from './components/characters/SingleCharacter';
import Home from './components/characters/Home';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/single/:id" element={<SingleCharacter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
