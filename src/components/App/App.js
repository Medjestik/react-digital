import React from 'react';
import './App.css';
import Main from '../Main/Main.js';
import Statistics from '../Statistics/Statistics.js';
import Programs from '../Programs/Programs.js';
import Description from '../Description/Description.js';
import Advantages from '../Advantages/Advantages.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <div className='page'>

      <Main />
      <Statistics />
      <Programs />
      <Description />
      <Advantages />
      <Footer />
      
    </div>
  );
}

export default App; 
