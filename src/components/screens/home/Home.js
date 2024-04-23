import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import SideBar from "../../includes/SideBar";
import Card from "./components/Card";
import "./home.css";
import Header from './../../includes/Header';
import Footer from "../../includes/Footer";

const Home = () => {
  return (
    <>
      <Header/>
      <div className="wrapper flexx">
          <SideBar/>
          <div className="home">
            
            <a href="#" className="overlay_link">
              <div>
                <h5>Only this Week</h5>
                <h1>Grocery store with different treasures</h1>
                <p>
                  We have prepared special discounts for you on grocery products...
                </p>
                <div className="button">
                  Shop Now{" "}
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </div>
            </a>

            <Card />

          </div>
      </div>
      <Footer/>

    </>
  );
};

export default Home;
