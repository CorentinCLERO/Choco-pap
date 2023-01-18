import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './components/Accueil';
import Boutique from './components/Boutique';
import Header from './components/Header';
import Panier from './components/Panier';
import Footer from './components/Footer';

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil />}></Route>
          <Route path='/Boutique' element={<Boutique />}></Route>
          <Route path='/Panier' element={<Panier />}></Route>
        </Routes>
        <Header />
        <Footer />
      </BrowserRouter>
    </section>
  );
}

// Colors : primary : blue ; secondary : brown ; success : darker brown ; info : light brown ; warning : yellow
export default App;
