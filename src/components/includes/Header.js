import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/grogin-logo.png";

const Header = () => {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const dueDate = new Date("May 5, 2024 18:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = dueDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference > 0) {
        setTimeRemaining(
          `${days} days ${hours} hours ${minutes} minutes ${seconds} sec.`
        );
      } else {
        clearInterval(interval);
        setTimeRemaining("EXPIRED");
      }
    }, 1000);
  });

  const [hamOpen, setHamOpen] = useState(false);

  const toggleHam = () => {
    setHamOpen(!hamOpen);
  };

  return (
    <HeaderContainer>
      <HeaderOverlay
        className={`${hamOpen ? "active" : ""}`}
        onClick={toggleHam}
      ></HeaderOverlay>
      <TopBanner>
        <div className="topBannerInner">
          <p>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </p>
          <CountDownTimer>{timeRemaining}</CountDownTimer>
        </div>
      </TopBanner>

      <Row1>
        <HeaderWrapper>
          <div className="flex">
            <ul className="flex">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
            </ul>
            <p>
              We deliver to you every day from
              <span>7:00 to 23:00</span>
            </p>
          </div>
          <div>
            <ul className="flex">
              <li>
                <a href="#">
                  English
                  <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="">English</a>
                  </li>
                  <li>
                    <a href="">German</a>
                  </li>
                  <li>
                    <a href="">Spanish</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  USD
                  <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="">USD</a>
                  </li>
                  <li>
                    <a href="">GBP</a>
                  </li>
                  <li>
                    <a href="">INR</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Order Tracking</a>
              </li>
            </ul>
          </div>
        </HeaderWrapper>
      </Row1>

      <Row2>
        <HeaderWrapper>
          <div className="row2_left">
            <HamburgerMenu>
              <button onClick={toggleHam}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </HamburgerMenu>

            <HeaderLogo href="#">
              <img
                style={{ display: "block", width: "100%" }}
                src={logo}
                alt="logo"
              />
            </HeaderLogo>
          </div>

          <div className="location_div flex">
            <div className="locationdot">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="location">
              <span>Deliver to</span>
              <p>all</p>
            </div>
          </div>

          <div className="searchbar flex">
            <input
              type="text"
              placeholder="Search for products,categories or brands..."
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          <div className="row2_right flex">
            <div>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <p>Account</p>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <p>Wishlist</p>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <p>Your Cart</p>
            </div>
          </div>
        </HeaderWrapper>
      </Row2>

      <Row3 className={`${hamOpen ? "ham" : ""}`}>
        <Row3HamDiv className={`${hamOpen ? "active" : ""}  `}>
          <Row3Ham className={`${hamOpen ? "active" : ""} `}>
            <HamClose style={{ display: hamOpen ? "flex" : "none" }}>
              <HamLogo href="#">
                <img src={logo} alt="logo" />
              </HamLogo>
              <button onClick={toggleHam}>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </HamClose>
            <li>
              <a href="#">
                Home <FontAwesomeIcon icon={faAngleDown} />
              </a>
            </li>
            <li>
              <a href="#">
                Shop <FontAwesomeIcon icon={faAngleDown} />
              </a>
            </li>
            <li>
              <a href="#">Fruits & Vegetables</a>
            </li>
            <li>
              <a href="#">Bevarages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </Row3Ham>
          <Row3Right className={`${hamOpen ? "active" : ""}`}>
            <li>
              <a href="#">
                Trending Products <FontAwesomeIcon icon={faAngleDown} />
              </a>
            </li>

            <li>
              <a className="red" href="#">
                <div>
                  Almost Finished
                  <span>SALE</span>
                </div>
                <FontAwesomeIcon icon={faAngleDown} />
              </a>
            </li>
          </Row3Right>
        </Row3HamDiv>
      </Row3>
    </HeaderContainer>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin-inline: auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  width: 100%;

  img {
    display: block;
    width: 100%;
  }
`;

const HeaderOverlay = styled.div`
  display: none;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: transparent;
  top: 0;
  right: 0;

  &.active {
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  margin-inline: auto;
`;

const TopBanner = styled.div`
  height: 40px;
  background-color: rgb(99, 76, 159);

  @media all and (max-width: 992px) {
    height: fit-content;
    padding-bottom: 10px;
  }

  .topBannerInner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 90%;
    margin-inline: auto;

    @media all and (max-width: 992px) {
      flex-direction: column;
      justify-content: center;
      font-size: 12px;
    }
  }

  p {
    font-size: 14px;
    font-weight: bold;
    color: white;
    
    @media all and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const CountDownTimer = styled.div`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
`;

const Row1 = styled.div`
  height: 40px;
  border-bottom: 1px solid #6b72804f;

  a {
    color: #6b7280;
    font-weight: 500;
  }

  div ul {
    padding: 0px;
    gap: 15px;
    font-size: 12px;
  }

  p {
    margin: 10px;
    padding-left: 10px;
    border-left: 1px solid black;
  }

  p span {
    margin-left: 7px;
    color: #ea590c;
    font-weight: 600;
  }

  &.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media all and (max-width: 992px) {
    display: none;
  }
`;

const Row2 = styled.div`
  padding-block: 5px;
  border-bottom: 1px solid #6b72804f;

  a {
    width: 150px;
  }

  .row2_left {
    @media all and (max-width: 992px) {
      display: flex;
      gap: 15px;
    }
  }

  .location_div {
    @media all and (max-width: 992px) {
      display: none;
    }
  }

  .locationdot {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: #6b72804f;
  }

  .location span {
    font-size: 11px;
    color: #6b7280;
  }

  .location p {
    margin: 0px;
    font-size: 13px;
    text-align: left;
  }

  .searchbar {
    height: 50px;
    max-width: 700px;
    width: 100%;
    justify-content: space-evenly;
    background-color: #6b72801f;
    border-radius: 7px;

    @media all and (max-width: 1240px) {
      width: 50%;
    }
    @media all and (max-width: 992px) {
      display: none;
    }

    &:hover {
      background-color: #6b728034;
    }
  }

  .searchbar input {
    font-size: 14px;
    width: 90%;
    padding-left: 10px;
    outline: none;
    border: none;
    background-color: transparent;
  }

  .searchbar button {
    height: 100%;
    width: 10%;
    border: none;
    font-size: 14px;
    color: #000;
    cursor: pointer;
    background-color: transparent;
  }

  .row2_right {
    color: #030712;
    font-size: 12px;
    padding: 0px;
  }

  .row2_right span {
    display: inline-block;
    font-size: 18px;
  }

  .row2_right p {
    margin-bottom: 0px;
  }

  .row2_right div {
    margin-right: 10px;
    padding-top: 5px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const HeaderLogo = styled.a`
  display: block;
  width: 125px;
`;

const HamburgerMenu = styled.div`
  display: none;
  width: fit-content !important;

  @media all and (max-width: 992px) {
    display: block;
  }

  button {
    background: none;
    color: #000;
    font-size: 20px;
  }
`;

const Row3 = styled.div`
  align-items: center;
  border-bottom: 1px solid #6b72804f;
`;

const HamClose = styled.li`
  justify-content: space-between;

  button {
    width: fit-content;
    height: fit-content;
    font-size: 20px;
    color: #000;
    background: none;
  }
  .ham {
    display: block !important;
    width: 100vw;
    height: 200vh;
    min-height: fit-content;
    background: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    z-index: 1;

    @media all and (max-width: 992px) {
      display: none;
    }
  }
`;

const Row3HamDiv = styled.div`
  max-width: 1200px;
  width: 90%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.active {
    display: block;
  }
  &.active li {
    border-bottom: 1px solid #00000052;
    padding: 8px;
  }
  &.active li a {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  @media all and (max-width: 992px) {
    display: none;
  }
`;

const Row3Ham = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media all and (max-width: 992px) {
    display: none;
  }

  &.active {
    display: block;
  }
  &.active li {
    border-bottom: 1px solid #00000052;
    padding: 8px;
  }
  &.active li a {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const HamLogo = styled.a`
  display: block;
  width: 180px !important;
  padding-bottom: 20px;
`;

const Row3Right = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  .red {
    display: inline-flex;
    margin-right: 0px;
    color: #dc2626;
  }
  li a span {
    display: inline-block;
    font-size: 10px;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    margin-inline: 7px;
    background: linear-gradient(
      90deg,
      rgba(220, 38, 38, 1) 36%,
      rgba(234, 89, 12, 1) 100%
    );
  }
`;

export default Header;
