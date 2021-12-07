import React from 'react'
import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import SectionCollection from './components/Collection'
import Footer from './components/Footer'

const App = ()=>{
  return (
    <div className="mainPage">
      <Header />
      <Banner />
      <SectionCollection />


      <Footer />
    </div>
  );
}

export default App;
