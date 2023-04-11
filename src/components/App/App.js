import React from 'react';
import './App.css';
import Main from '../Main/Main.js';
import Statistics from '../Statistics/Statistics.js';
import Programs from '../Programs/Programs.js';
import Description from '../Description/Description.js';
import Advantages from '../Advantages/Advantages.js';
import Footer from '../Footer/Footer.js';

function App() {

  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    function resizeWindow (evt) {
      setWindowWidth(evt.target.innerWidth);
    }
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, []);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  return (
    <div className='page'>

      <Main />
      {
        //
        //
      }
      <Statistics />
      
      <Programs />
      <Description windowWidth={windowWidth} />
      <Advantages />
      <Footer />
  
      
    </div>
  );
}

export default App; 
