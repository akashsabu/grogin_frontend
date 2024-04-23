import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./header.css";
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
    <header>
      <div
        className={`${hamOpen ? "active" : ""} header_overlay`}
        onClick={toggleHam}
      ></div>
      <div className="TopBanner">
        <div className="wrapper flex">
          <p>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </p>
          <div className="CountDownTimer ">{timeRemaining}</div>
        </div>
      </div>

      <div className="row1">
        <div className="wrapper flex">
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
        </div>
      </div>

      <div className="row2">
        <div className="wrapper flex">

          <div className="row2_left">
            <div className="hamburger_menu">
              <button onClick={toggleHam}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            <a className="header_logo" href="#">
              <img style={{display:"block", width:"100%"}} src={logo} alt="logo" />
            </a>
          
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
        </div>
      </div>



      <div className={`${hamOpen ? "ham" : ""} row3 `}>
        <div className={`${hamOpen ? "active" : ""} wrapper row3_ham`}>
          <ul className={`${hamOpen ? "active" : ""} row3_ham`}>
            <li className="ham_close" style={{ display: hamOpen ? 'flex' : 'none' }}>
                <a href="#" className="ham_logo">
                  <img src={logo} alt="logo" />
                </a>
                <button  onClick={toggleHam}>
                  <FontAwesomeIcon icon={faClose} />
                </button>

            </li>
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
          </ul>
            <ul className={`${hamOpen ? "active" : ""} row3_right row3_ham`}>
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
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
