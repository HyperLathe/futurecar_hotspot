import React from "react";
import styled from 'styled-components';
import Content from "../content/content.json";
import ReturnButton from "../img/return.png";
import Arrow from "../img/arrow.png";
import Indicator from "../img/hotspot.png";

const contentData = (Content);

const CopyContainer = styled.div`
  position: absolute;
    width: calc(100% - 80px);
    height: calc(100% - 40px);
    margin: 0px 40px 20px 40px;
    bottom: 0px;
      @media (max-width: 730px) {
        margin: 0 10px 10px 10px;
        width: calc(100% - 20px);
      }
      @media (max-width: 1008px) {
        margin: 0 10px 20px 10px;
        width: calc(100% - 20px);
      }
`;

const CopyInterior = styled.div`
  position: absolute;
  bottom: 0;
  border-left: 10px solid #fff;
  @media (max-width: 730px) {
    border-left: 7px solid #fff;
  }
`;

const CopyNav = styled.div`
  display: flex;
  padding-left: 25px;
  margin-bottom: 20px;
    button {
      font-size: 1.8rem;
      line-height: 2.7rem;
      color: #fff;
      font-family: 'AustinNewsDeckExtraBold', serif;
      cursor: pointer;
      color: #7c93d9;
      position: relative;
      background: transparent;
      border: none;
      outline: none;
      padding: 0;
      margin: 0;
        &:hover {
          opacity: 1;
          color: #fff;
        }
        @media (max-width: 730px) {
          font-size: 1.2rem;
          line-height: 1.7rem;
        }
    }
    button:first-child::after {
      content: '';
      width: 10px;
      height: 10px;
      background: url('${Arrow}') center center no-repeat;
      background-size: contain;
      display: block;
      position: absolute;
      right: 0;
      margin: -20px -26px 0px 0px;
      @media (max-width: 730px) {
        width: 7px;
        margin-right: -13px;
        margin-top: -14px;
      }
    }

    button:last-child::before {
      content: '';
      width: 10px;
      height: 10px;
      background: url('${Arrow}') center center no-repeat;
      background-size: contain;
      display: block;
      position: absolute;
      left: 0;
      margin: 8px 0px 0px -26px;
      transform: rotate(180deg);
      @media (max-width: 730px) {
        width: 7px;
        margin-left: -12px;
        margin-top: 4px;
      }
    }
    span {
      font-size: 2rem;
      color: #fff;
      font-family: 'AustinNewsDeckExtraBold', serif;
      padding: 0 40px;
        @media (max-width: 730px) {
          font-size: 1.5rem;
          padding: 0px 27px;
        }
    }
    @media (max-width: 730px) {
      padding-left: 15px;
      margin-bottom: 10px;
    }
`;

const CopyMain = styled.div`
  color: #fff;
  padding: 0px 20px 0px 25px;
    p {
      font-size: 1.4rem;
      line-height: 1.8rem;
      font-family: 'Telesans Text Regular', Arial, sans-serif;
      margin: 0;
      @media (max-width: 730px) {
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }
  @media (max-width: 730px) {
    padding: 0px 0px 0px 15px;
  }
`;

const Button = styled.button`
  background: url('${ReturnButton}') top center no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  border: 0;
  outline: none;
  opacity: 0.8;
  z-index: 5;
  transition: all 0.3s ease;
    &:hover {
      opacity: 1;
    }
    &:after {
      content: 'Zoom out';
      display: block;
      position: absolute;
      color: #fff;
      font-weight: bold;
      top: 2px;
      left: 35px;
      font-size: 1.3rem;
      text-align: left;
      line-height: 1.3rem;
      text-shadow: 0px 0px 3px #29418f;

    }
    @media (max-width: 730px) {
      position: absolute;
      top: 0;
      right: 0;
      height: 30px !important;
      margin-bottom: 0px !important;
      opacity: 1;
        &:after {
          display: none;
        }
    }
    @media (max-width: 1008px) {
        margin-bottom: 75px;
    }
`;

const HotspotIndicator = styled.div`
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
      &:after {
      content: '';
        width: 20px;
        height: 20px;
        background: url('${Indicator}') center center no-repeat;
        background-size: contain;
        display: block;
        position: absolute;
        right: 0;
        margin-right: -15px;
        margin-top: -11px;
      }
      @media (max-width: 1008px) {
        margin-bottom: 6%;
      }
`;



function CopyBox(props) {

  props.viewSpots(false);

  function prev() {
    let nextPage = props.slideNumber;
    nextPage--;
    if (nextPage === -1) {
      nextPage = 7;
    }
    props.slideUpdate(nextPage);
    props.newBgSize(contentData[nextPage].ZoomLevel);
    props.newbgXPos(contentData[nextPage].xPos);
    props.newbgYPos(contentData[nextPage].yPos);

    props.newBgSizeMob(contentData[nextPage].ZoomLevelMobile);
    props.newbgXPosMob(contentData[nextPage].xPosMobile);
    props.newbgYPosMob(contentData[nextPage].yPosMobile);

    props.newDotH(contentData[nextPage].indHeight);
    props.newDotW(contentData[nextPage].indWidth);
  }

  function next() {
    let nextPage = props.slideNumber;
    nextPage++;
    if (nextPage === 8) {
      nextPage = 0;
    }
    props.slideUpdate(nextPage);
    props.newBgSize(contentData[nextPage].ZoomLevel);
    props.newbgXPos(contentData[nextPage].xPos);
    props.newbgYPos(contentData[nextPage].yPos);

    props.newBgSizeMob(contentData[nextPage].ZoomLevelMobile);
    props.newbgXPosMob(contentData[nextPage].xPosMobile);
    props.newbgYPosMob(contentData[nextPage].yPosMobile);

    props.newDotH(contentData[nextPage].indHeight);
    props.newDotW(contentData[nextPage].indWidth);
  }

  function closeContainer() {
    props.viewSpots(true);
    props.closeCopyBox(false);
    props.slideUpdate(null);

    props.newBgSize(1);
    props.newbgXPos(3);
    props.newbgYPos(0);

    props.newBgSizeMob(2.5);
    props.newbgXPosMob(3);
    props.newbgYPosMob(-3);
  }

  return (
    <CopyContainer>
      <Button onClick={closeContainer} style={{ height: (props.iDotH) + "%" }} title="Zoom out" />
      <HotspotIndicator style={{ height: props.iDotH + "%", width: props.iDotW + "%" }} />
      <CopyInterior>
        <CopyNav>
          <button onClick={prev} title="Previous item">prev</button>
          <span>{props.title}</span>
          <button onClick={next} title="Next item">next</button>
        </CopyNav>
        <CopyMain>
          <p>{props.copy}</p>
        </CopyMain>
      </CopyInterior>
    </CopyContainer>
  );
}

export default CopyBox;