import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./footer.css";

import Google from "../../assets/images/footer/google-play-button.png";
import Apple from "../../assets/images/footer/apple-store-button.png";
import facebook from "../../assets/images/footer/facebook.png";
import instagram from "../../assets/images/footer/instagram.png";
import linkedin from "../../assets/images/footer/linkedIn.png";
import twitter from "../../assets/images/footer/twitter.png";
import visa from "../../assets/images/footer/visa.png";
import mastercard from "../../assets/images/footer/mastercard.png";
import paypal from "../../assets/images/footer/paypal.png";
import klarna from "../../assets/images/footer/klarna.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="ftr_top">
          <div className="left">
            <h3>Join our newsletter for $10 offs</h3>
            <p>
              Register now to get latest updates on promotions & coupons.Don’t
              worry, we do not spam!
            </p>
          </div>
          <div className="right">
            <div>
              <input type="text" placeholder="Enter your email address" />
              <button>SEND</button>
            </div>
            <p>
              By subscribing you agree to our &nbsp;
              <a href="#">
                Terms & Conditions and Privacy & Cookies Policy.
              </a>{" "}
            </p>
          </div>
        </div>

        <div className="ftr_center">
          <div className="left">
            <h4>Do You Need Help ?</h4>
            <p>
              Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
              Pressa fåmoska.
            </p>
            <div className="footer_contact">
              <span>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </span>
              <div>
                <p>Monday-Friday: 08am-9pm</p>
                <a style={{ fontSize: "20px", fontWeight: "bold" }} href="">
                  0 800 300-353
                </a>
              </div>
            </div>

            <div className="footer_contact">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <div>
                <p>Need help with your order?</p>
                <a style={{ fontWeight: "bold" }} href="">
                  info@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="link_col">
              <h4>Make Money wth Us</h4>
              <a href="">Sell on Grogin</a>
              <a href="">Sell Your Services on Grogin</a>
              <a href="">Sell Your Apps on Grogin</a>
              <a href="">Become an Affilate</a>
              <a href="">Sell-Publish with Us</a>
            </div>

            <div className="link_col">
              <h4>Let Us Help You</h4>
              <a href="">Accessebility Statement</a>
              <a href="">Your Orders</a>
              <a href="">Return & Replacements</a>
              <a href="">Shipping Rates & Policies</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms and Condition</a>
              <a href="">Help Center</a>
            </div>

            <div className="link_col">
              <h4>Get to Know Us</h4>
              <a href="">Careers for Grogin</a>
              <a href="">About Grogin</a>
              <a href="">Investor Relations</a>
              <a href="">Grogin Devices</a>
              <a href="">Customer reviews</a>
            </div>

            <div className="link_col">
              <div className="footer_button">
                <a href="#">
                  <div>
                    <img src={Google} alt="google play" />
                  </div>
                </a>
                <p>Download App Get 10% Discount</p>
              </div>

              <div className="footer_button">
                <a href="#">
                  <div>
                    <img src={Apple} alt="App store" />
                  </div>
                </a>
                <p>Download App Get 20% Discount</p>
              </div>
              <p>Follow us on social media:</p>

              <ul>
                <li className="Footer_social">
                  <img src={facebook} alt="facebook" />
                </li>
                <li className="Footer_social">
                  <img src={instagram} alt="instagram" />
                </li>
                <li className="Footer_social">
                  <img src={linkedin} alt="linkedin" />
                </li>
                <li className="Footer_social">
                  <img src={twitter} alt="twitter" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ftr_bottom">
          <div>
            <p>
              Copyright 2024 &#169; Grogin WooCommerce WordPress Theme. All
              right reserved.Powered by <span>KLBTheme</span>{" "}
            </p>
            <ul id="payment_logo">
              <li>
                <img src={visa} alt="visa" />
              </li>
              <li>
                <img src={paypal} alt="paypal" />
              </li>
              <li>
                <img src={mastercard} alt="mastercard" />
              </li>
              <li>
                <img src={klarna} alt="klarna" />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Order Tracking</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
