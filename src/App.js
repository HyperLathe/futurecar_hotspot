import React, { useState } from "react";
import styled from 'styled-components';
import './App.css';


import Content from "./content/content.json";
import HouseImg from './components/HouseImg';
import IntroContent from './components/IntroContent';
import Navigation from './components/Navigation';
import NavigationSpots from './components/NavigationSpots';
import CopyBox from './components/CopyBox';


// <---- styles ---->

const Container = styled.div`
  width: 100%;
  margin: 0px auto;
  position: relative;
  padding-top: 68.5%;
    @media (max-width: 1008px) {
      padding-top: 80%;
    }
    @media (max-width: 730px) {
      padding-top: 0;
    }
`;

const EverestInteractive = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
    @media (max-width: 730px) {
      position: unset;
    }
`;

const NavContainer = styled.div`
  @media (max-width: 1008px) {
   min-height: 650px; 
  }
  @media (max-width: 730px) {
    min-height: 610px;
  }
`;

// <-- app -->

function App() {
  const [viewSlider, setviewSlider] = useState(50);
  const [IntroPage, setIntroPage] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const [OverviewPage, setOverviewPage] = useState(false);
  const [navSpots, setSpotsVisible] = useState(true);
  const [CurrentSlide, changeSlide] = useState(null);
  const [bgZoom, changebgZoom] = useState(1);
  const [bgXPos, changeBgXPos] = useState(0);
  const [bgYPos, changeBgYPos] = useState(0);
  const [bgZoomMobile, changebgZoomMobile] = useState(1);
  const [bgXPosMobile, changeBgXPosMobile] = useState(0);
  const [bgYPosMobile, changeBgYPosMobile] = useState(0);
  const [iDotW, changeiDotW] = useState(0);
  const [iDotH, changeiDotH] = useState(0);

  return (
    <div className="App">
      <Container>
        <EverestInteractive >
          <HouseImg
          bgz={bgZoom}
          bgx={bgXPos}
          bgy={bgYPos}
          bgzm={bgZoomMobile}
          bgxm={bgXPosMobile}
          bgym={bgYPosMobile}
          viewSlider={viewSlider}/>
          {IntroPage &&
            (<IntroContent
              exitIntroPage={setIntroPage}
              newBgSize={changebgZoom}
              newbgXPos={changeBgXPos}
              newbgYPos={changeBgYPos} 
              newBgSizeMob={changebgZoomMobile}
              newbgXPosMob={changeBgXPosMobile}
              newbgYPosMob={changeBgYPosMobile} />)
            ||
            (<NavContainer>
              <Navigation
              goTo={changeSlide}
              CurrentSlide={CurrentSlide}
              openCopyBox={setOverviewPage}
              newBgSize={changebgZoom}
              newbgXPos={changeBgXPos}
              newbgYPos={changeBgYPos}
              newBgSizeMob={changebgZoomMobile}
              newbgXPosMob={changeBgXPosMobile}
              newbgYPosMob={changeBgYPosMobile}
              newDotW={changeiDotW}
              newDotH={changeiDotH}
              iDotW={iDotW}
              iDotH={iDotH}
              mobileNav={mobileNav}
              setMobileNav={setMobileNav}
              setviewSlider={setviewSlider}  />

              {navSpots &&
              <NavigationSpots
              goTo={changeSlide}
              openCopyBox={setOverviewPage}
              newBgSize={changebgZoom}
              newbgXPos={changeBgXPos}
              newbgYPos={changeBgYPos}
              newBgSizeMob={changebgZoomMobile}
              newbgXPosMob={changeBgXPosMobile}
              newbgYPosMob={changeBgYPosMobile}
              newDotW={changeiDotW}
              newDotH={changeiDotH}
              iDotW={iDotW}
              iDotH={iDotH}
              viewSlider={viewSlider}
              setviewSlider={setviewSlider} />}

            </NavContainer>)
          }

          {OverviewPage &&
            <CopyBox
              closeCopyBox={setOverviewPage}
              slideNumber={CurrentSlide}
              slideUpdate={changeSlide}
              title={Content[CurrentSlide].title}
              copy={Content[CurrentSlide].copy}
              newBgSize={changebgZoom}
              newbgXPos={changeBgXPos}
              newbgYPos={changeBgYPos}
              newBgSizeMob={changebgZoomMobile}
              newbgXPosMob={changeBgXPosMobile}
              newbgYPosMob={changeBgYPosMobile}
              iDotH={Content[CurrentSlide].indHeight}
              iDotW={Content[CurrentSlide].indWidth}
              viewSpots={setSpotsVisible}
              newDotW={changeiDotW}
              newDotH={changeiDotH} />
          }

        </EverestInteractive>
      </Container>
    </div>
  );
}

export default App;
