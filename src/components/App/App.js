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
import ProgramInfoPopup from '../Popup/ProgramInfoPopup/ProgramInfoPopup.js';
import ConsortiumPopup from '../Popup/ConsortiumPopup/ConsortiumPopup.js';
import DocumentPopup from '../Popup/DocumentPopup/DocumentPopup.js';

function App() {

  const [windowWidth, setWindowWidth] = React.useState(0);

  const [isOpenProgramInfoPopup, setIsOpenProgramInfoPopup] = React.useState(false);
  const [isOpenDocumentPopup, setIsOpenDocumentPopup] = React.useState(false);
  const [isOpenConsortiumPopup, setIsOpenConsortiumPopup] = React.useState(false);

  const [currentProgram, setCurrentProgram] = React.useState({});

  function openProgramInfoPopup(program) {
    closePopups();
    setCurrentProgram(program);
    setIsOpenProgramInfoPopup(true);
  }

  function openDocumentPopup() {
    setIsOpenDocumentPopup(true);
  }

  function openConsortiumPopup() {
    setIsOpenConsortiumPopup(true);
  }

  function closePopups() {
    setIsOpenProgramInfoPopup(false);
    setIsOpenDocumentPopup(false);
    setIsOpenConsortiumPopup(false);
  }

  React.useEffect(() => {
    return(() => {
      setCurrentProgram({});
    })
  }, []);


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

      <Main windowWidth={windowWidth} onOpenDocument={openDocumentPopup} onOpenConsortium={openConsortiumPopup} />
      <Statistics />
      <Programs onOpenProgram={openProgramInfoPopup} />
      <Description windowWidth={windowWidth} />
      <Advantages />
      <News windowWidth={windowWidth} />
      <Team />
      <Partners windowWidth={windowWidth} />
      <Footer windowWidth={windowWidth} />

      {
        isOpenProgramInfoPopup &&
        <ProgramInfoPopup
          isOpen={isOpenProgramInfoPopup}
          onClose={closePopups}
          program={currentProgram}
        />
      }

      {
        isOpenConsortiumPopup &&
        <ConsortiumPopup
          isOpen={isOpenConsortiumPopup}
          onClose={closePopups}
          onOpenProgram={openProgramInfoPopup}
        />
      }

      {
        isOpenDocumentPopup &&
        <DocumentPopup
          isOpen={isOpenDocumentPopup}
          onClose={closePopups}
        />
      }
   
    </div>
  );
}

export default App;
