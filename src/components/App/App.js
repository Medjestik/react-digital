import React from 'react';
import './App.css';
import Main from '../Main/Main.js';
import Statistics from '../Statistics/Statistics.js';
import Programs from '../Programs/Programs.js';
import Description from '../Description/Description.js';
import Advantages from '../Advantages/Advantages.js';
import News from '../News/News.js';
import Team from '../Team/Team.js';
import Partners from '../Partners/Partners.js';
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

      <Main windowWidth={windowWidth} />
      <Statistics />
      <Programs />
      <Description windowWidth={windowWidth} />
      <Advantages />
      <News windowWidth={windowWidth} />
      <Team />
      <Partners windowWidth={windowWidth} />
      <Footer windowWidth={windowWidth} />
   
    </div>
  );
}

export default App;
