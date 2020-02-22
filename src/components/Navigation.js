import React from "react";
import styled from 'styled-components';
import Content from "../content/content.json";

const contentData = (Content);

const SelectHotspot = styled.button`
  font-size: 1.4rem;
  padding: 17px 13px;
  background-color: #11f2ff;
  position: absolute;
  border-radius: 0px 0px 20px 20px;
  color: #1e3780;
  font-weight: bold;
  border: 0;
  top: 0;
  left: 0;
  margin: 0px 0px 0px 14px;
  outline: none;
  z-index: 10;
  font-family: Arial, sans-serif;
  @media (max-width: 730px) {
    margin: 0px 0px 0px 15px
  }
`;


const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  position: absolute;
  z-index: 5;
  width: 100%;
  top: 20px;
  padding: 0px 0px 0px 166px;
  justify-content: flex-start;
  margin: 0;
    li {
      button {
        font-size: 1.2rem;
        color: #fff;
        cursor: pointer;
        background: transparent;
        border: 0;
        padding: 0;
        margin: 0;
        outline: none;
        text-shadow: 0px 0px 3px #000;
        font-family: 'Telesans Text Regular', Arial, sans-serif;
          &:after {
            content: '•';
            margin: 0px 9px;
          }
      }
      &:hover {
        -webkit-text-stroke: 0.5px #fff;
      }
      &.active button {
        -webkit-text-stroke: 0.5px #fff;
      }
    }
    li:last-child button:after {
      display: none;
    }
    @media (max-width: 730px) {
      padding: 0px 10px 0px 40px;
      list-style-type: disc;
      background: #98c7b7;
      margin: -50px -10px 0px 0px;
      margin-top: -20px;
      flex-direction: column;
      justify-content: space-around;
      height: 0%;
      flex-wrap: nowrap;
      transition: all 0.3s ease;
        li {
          padding-left: 5px;
          opacity: 0;
          button {
            color: #1e3780;
            text-shadow: none;
            font-size: 1.4rem;
              &:after {
                display: none;
              }
          }     
          &:hover {
            -webkit-text-stroke: 0;
          }
          &.active button {
            -webkit-text-stroke: 0;
          }
        }
      &.mobilenav-active {
        height: 100%;
        padding: 50px 10px 20px 40px;
        z-index: 6;
           li {
             opacity: 1;
             font-size: 1.3rem;
           }
      }
    }
`;


function Navigation(props) {

  const toggleMobileNav = () => props.setMobileNav(!props.mobileNav);

  function handleClick(id) {
    props.openCopyBox(true);
    props.setviewSlider(50);
    let pageNumber = parseInt(id);
    props.goTo(pageNumber); 
    props.newBgSize(contentData[pageNumber].ZoomLevel);
    props.newbgXPos(contentData[pageNumber].xPos);
    props.newbgYPos(contentData[pageNumber].yPos);


    props.newBgSizeMob(contentData[pageNumber].ZoomLevelMobile);
    props.newbgXPosMob(contentData[pageNumber].xPosMobile);
    props.newbgYPosMob(contentData[pageNumber].yPosMobile);

    
    props.newDotH(contentData[pageNumber].indHeight);
    props.newDotW(contentData[pageNumber].indWidth);
    props.setMobileNav(!props.mobileNav);
  }

  return (
    <div>
    <SelectHotspot onClick={toggleMobileNav}  >Select a hotspot</SelectHotspot>
    <Menu className={props.mobileNav ? 'mobilenav-active' : ''}>
      {Object.entries(contentData).map(([key, value])=> {
        return (<li key={key} className={key === props.CurrentSlide ? 'active' : ''} id={key} ><button onClick={(e) => handleClick(key,e)}>{value.title}</button></li>)
      })}
    </Menu>
    </div>
  );
}

export default Navigation;