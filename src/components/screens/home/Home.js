import React from "react";
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import SideBar from "../../includes/SideBar";
import Card from "./components/Card";
// import "./home.css";
import Header from './../../includes/Header';
import Footer from "../../includes/Footer";
import { Link } from "react-router-dom";

import overlay_bg from "../../../assets/images/home/banner1.jpg";

const Home = () => {
  return (
    <>
      <Header/>
      <HomeContainer>
          <SideBar/>
          <HomeDiv>
            
            <OverlayLink>
              <div>
                <h5>Only this Week</h5>
                <h1>Grocery store with different treasures</h1>
                <p>
                  We have prepared special discounts for you on grocery products...
                </p>
                <OverLayButton>
                  Shop Now{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </OverLayButton>
              </div>
            </OverlayLink>

            <Card/>

          </HomeDiv>
      </HomeContainer>
      <Footer/>

    </>
  );
};

const HomeContainer = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  width: 90%;
  justify-content: center;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;

  @media all and (max-width: 992px) {
    flex-direction: column;
  }
`;

const HomeDiv = styled.div`
  width: 100%;
  justify-content: center;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
`;

const OverlayLink = styled(Link)`
  width: 100%;
  display: block;
  border-radius: 7px;
  padding: 16px 32px;
  box-sizing: border-box;
  margin-block: 15px;
  background: url(${overlay_bg});
  color: #030712;

  div {
    width: 50%;

    @media all and (max-width: 768px) { 
        width: 80%;
    }
  }

  h1 {
    @media all and (max-width: 768px) {
        font-size: 28px;
        text-align: left;
    }
  }
  
  h5 {
    width: fit-content;
    background-color: bisque;
    color: rgb(124, 45, 18);
    font-size: 10px;
    border-radius: 15px;
    margin-block: 0px 10px;
    padding: 5px 10px;
  }

  p {
    font-size: 14px;
    color: #6b7280;

    @media all and (max-width: 768px) {
        font-size: 13px;
    }
    
  }

`;

const OverLayButton = styled.div`
  width: fit-content;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 7px 16px;
  border-radius: 16px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export default Home;
