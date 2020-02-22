import React from "react";
import styled from 'styled-components';
import Content from "../content/content.json";

import HotSpot from "../img/hotspot.png";

const contentData = (Content);

const NavSpots = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
   button {
     position: absolute;
     width: 17px;
     height: 17px;
     border-radius: 50%;
     background: url('${HotSpot}') center center no-repeat;
     background-size: contain;
     transition: all 0.3s ease;
     border: 0;
     outline: 0;
     cursor: pointer;
      &:hover {
        transform: scale(1.5);
      }
   }
  @media (max-width: 730px) {
    width: 200%;
    margin-top: -97%;
    transform: scale(1.2) translateY(50%) translateX(-22%);
    margin-left: -50%;
  }
`;

const Slider = styled.input `
    -webkit-appearance: none;
    position: absolute;
    bottom: 10%;
    width: 80%;
    margin-left: 10%;
    height: 50px;
    border-radius: 20px;
    z-index: 4;
    background: transparent;
    border: 2px solid #fff;
    display: none;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 20px;
      background: #fff;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 20px;;
      background: #fff;
      cursor: pointer;
    }
    @media (max-width: 730px) {
      display: block;
    }
  &:after {
    content: 'Move around';
    font-family: 'Telesans Text Regular', Arial, sans-serif;
    display: block;
    position: absolute;
    color: #fff;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    bottom: 0;
    margin-bottom: -31px;
  }
`;

function NavigationSpots(props) {


  const setMobileView = (e) => {
    props.setviewSlider(e.currentTarget.value);
  }

  let spotsAdjust = {
    marginLeft: ((props.viewSlider - 50) * 3) + 'px',
    marginRight: -((props.viewSlider - 50) * 3) + 'px',
  }


  function handleClick(id) {
    props.openCopyBox(true);

    props.setviewSlider(50);

    let pageNumber = parseInt(id);
    props.goTo(pageNumber);
    props.newBgSize(1.7);
    props.newBgSize(contentData[pageNumber].ZoomLevel);
    props.newbgXPos(contentData[id].xPos);
    props.newbgYPos(contentData[id].yPos);

    props.newBgSizeMob(contentData[pageNumber].ZoomLevelMobile);
    props.newbgXPosMob(contentData[id].xPosMobile);
    props.newbgYPosMob(contentData[id].yPosMobile);

    props.newDotH(contentData[id].indHeight);
    props.newDotW(contentData[id].indWidth);


  }



  return (
    <div>
      <NavSpots style={spotsAdjust} > {Object.entries(contentData).map(([key]) => { 
        return (<button key={key} id={key} onClick={(e) => handleClick(key, e)} style={{ marginTop: contentData[key].xSpot + "%", marginLeft: contentData[key].ySpot + "%" }} title="Click to read more" />)
          })}
      </NavSpots>
      <Slider type="range" min={0} max={100} value={props.viewSlider} id="viewRange" onChange={setMobileView}></Slider>
  </div>
  );
}

    export default NavigationSpots;