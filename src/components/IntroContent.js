import React from "react";
import styled from 'styled-components';

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  width: 100%;
  margin: 0px auto;
  position: absolute;
  bottom: 0;
  padding: 0px 13% 55px 13%;
  h2 {
     font-size: 3rem;
     font-family: 'AustinNewsDeckExtraBold', serif;
     margin: 1rem 0;
   }
   p {
     font-size: 1.7rem;
     font-family: 'Austin News Text Roman', Georgia, Times, serif;
     margin: 1rem 0 3.5rem 0;
   }
   button {
     width: 45%;
     padding: 15px 0;
     border: 2px solid #fff;
     border-radius: 20px;
     margin: 0px auto;
     font-family: 'AustinNewsDeckExtraBold', serif;
     font-size: 2rem;
     background: transparent;
     color: #fff;
     cursor: pointer;
      &:hover {
        background: #fff;
        color: #000;
      }
   }
  @media (max-width: 730px) {
      padding: 0px 15px 15% 15px;
      position: relative;
      padding-top: 95%;
      h2 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.5rem;
        margin: 0 0 1.5rem 0;
      }
      button {
        width: 80%;
        padding: 10px 0;
      }
  }
  @media (min-width: 731px) and (max-width: 1008px) {
    position: relative;
    padding-top: 45%;
  }
`;


function IntroContent(props) {
  const closeintro = () => {
    props.exitIntroPage(false);
    props.newBgSize(1);
    props.newbgXPos(3);
    props.newbgYPos(0);

    props.newBgSizeMob(2.5);
    props.newbgXPosMob(3);
    props.newbgYPosMob(-3);
  }

  props.newBgSize(0.7);
  props.newbgXPos(4);
  props.newbgYPos(-17);

  props.newBgSizeMob(1.5);
  props.newbgXPosMob(4);
  props.newbgYPosMob(-12);


  return (
  <Intro>
    <h2>Enhance your living space</h2>
    <p>From front doors, windows and conservatories to guttering, security systems and garages, find out how each individual element combines to make your house a home.</p>
    <button onClick={closeintro} > Discover more </button>
  </Intro >
  );
}
    
export default IntroContent;