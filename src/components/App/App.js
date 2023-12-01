import React from 'react';
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { news } from '../../utils/news.js';
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
import NewsPopup from '../Popup/NewsPopup/NewsPopup.js';
import DocumentPopup from '../Popup/DocumentPopup/DocumentPopup.js';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [windowWidth, setWindowWidth] = React.useState(0);

  const [isOpenProgramInfoPopup, setIsOpenProgramInfoPopup] = React.useState(false);
  const [isOpenDocumentPopup, setIsOpenDocumentPopup] = React.useState(false);
  const [isOpenNewsPopup, setIsOpenNewsPopup] = React.useState(false);
  const [isOpenConsortiumPopup, setIsOpenConsortiumPopup] = React.useState(false);

  const [currentProgram, setCurrentProgram] = React.useState({});
  const [currentNews, setCurrentNews] = React.useState({});

  function openProgramInfoPopup(program) {
    closePopups();
    setCurrentProgram(program);
    setIsOpenProgramInfoPopup(true);
  }

  function openDocumentPopup() {
    setIsOpenDocumentPopup(true);
  }

  function openNewsPopup(news) {
    navigate('/news/' + news.id);
    //setIsOpenDocumentPopup(true);
  }

  function openConsortiumPopup() {
    setIsOpenConsortiumPopup(true);
  }

  function closePopups() {
    setIsOpenProgramInfoPopup(false);
    setIsOpenDocumentPopup(false);
    setIsOpenNewsPopup(false);
    setIsOpenConsortiumPopup(false);
    navigate('/');
  }

  React.useEffect(() => {
    if (location.pathname.includes('news')) {
      const findNews = news.find((elem) => location.pathname.includes(elem.id));
      setCurrentNews(findNews);
      setIsOpenNewsPopup(true);
    }
  }, [location]);

  React.useEffect(() => {
    return(() => {
      setCurrentProgram({});
      setCurrentNews({});
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
      <News windowWidth={windowWidth} onOpen={openNewsPopup} />
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
        isOpenNewsPopup &&
        <NewsPopup
          isOpen={isOpenNewsPopup}
          onClose={closePopups}
          news={currentNews}
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
