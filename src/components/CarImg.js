import React from "react";
import styled from 'styled-components';


import ForegroundPic from "../img/car.png";


const ImgContainer = styled.div`
  position: absolute;
  background: url('${ForegroundPic}') center center no-repeat;
  z-index: 0;
  background-size: contain;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.5s ease;
  -webkit-transition: transform 0.5s ease;
  -webkit-transition: -webkit-transform 0.5s ease;
  will-change: transform, translate;
    @media (max-width: 1008px) {
      margin-top: -10%;
    }
    @media (max-width: 730px) {
      width: 190%;
      position: absolute;
      margin-left: -40%;
      margin-top: 20%;
      background-position-y: top;
      display: none;
    }
`;

const ImgContainerMobile = styled.div`
  position: absolute;
  background: url('${ForegroundPic}') center center no-repeat;
  z-index: 0;
  background-size: contain;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: transform 0.5s ease;
  -webkit-transition: transform 0.5s ease;
  -webkit-transition: -webkit-transform 0.5s ease;
  will-change: transform, translate;
  display: none;
    @media (max-width: 730px) {
      display: block;
    }
`;


function HouseImg(props) {
  let slideAdjust = ((props.viewSlider - 50) * 3);
  const bgStyle = {
    transform: 'scale(' + props.bgz + ') translateX(' + props.bgx + '%) translateY(' + props.bgy + '%)',
  }
  const bgStyleMob = {
    transform: 'scale(' + props.bgzm + ') translateX(' + props.bgxm + '%) translateY(' + props.bgym + '%)',
    marginLeft: slideAdjust + 'px',
    marginRight: -slideAdjust + 'px',
  }
  return (
    <div>
    <ImgContainer style={bgStyle} />
    <ImgContainerMobile style={bgStyleMob} />
    </div>
  );
}

export default HouseImg;