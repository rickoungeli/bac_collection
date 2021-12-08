import React from 'react'
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import SectionCollection from './components/SectionCollection'
import SectionProduits from './components/SectionProduits'
import Footer from './components/Footer'

const App = ()=>{
  return (
    <div className="mainPage">
      <Header />
      <Banner />
      <SectionCollection />
      <SectionProduits />

      <Footer />
    </div>
  );
}

export default App;
