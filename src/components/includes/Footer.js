import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


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
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <FtrTopLeft>
            <h3>Join our newsletter for $10 offs</h3>
            <p>
              Register now to get latest updates on promotions & coupons.Don’t
              worry, we do not spam!
            </p>
          </FtrTopLeft>
          <FtrTopLRight>
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
          </FtrTopLRight>
        </FooterTop>

        <FooterCenter>
          <FtrCtrLeft>
            <h4>Do You Need Help ?</h4>
            <p>
              Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
              Pressa fåmoska.
            </p>
            <FooterContact>
              <span>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </span>
              <div>
                <p>Monday-Friday: 08am-9pm</p>
                <a style={{ fontSize: "20px", fontWeight: "bold" }} href="">
                  0 800 300-353
                </a>
              </div>
            </FooterContact>

            <FooterContact>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <div>
                <p>Need help with your order?</p>
                <a style={{ fontWeight: "bold" }} href="">
                  info@example.com
                </a>
              </div>
            </FooterContact>
          </FtrCtrLeft>

          <FtrCtrRight>
            <LinkCol>
              <h4>Make Money wth Us</h4>
              <a href="">Sell on Grogin</a>
              <a href="">Sell Your Services on Grogin</a>
              <a href="">Sell Your Apps on Grogin</a>
              <a href="">Become an Affilate</a>
              <a href="">Sell-Publish with Us</a>
            </LinkCol>

            <LinkCol>
              <h4>Let Us Help You</h4>
              <a href="">Accessebility Statement</a>
              <a href="">Your Orders</a>
              <a href="">Return & Replacements</a>
              <a href="">Shipping Rates & Policies</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms and Condition</a>
              <a href="">Help Center</a>
            </LinkCol>

            <LinkCol>
              <h4>Get to Know Us</h4>
              <a href="">Careers for Grogin</a>
              <a href="">About Grogin</a>
              <a href="">Investor Relations</a>
              <a href="">Grogin Devices</a>
              <a href="">Customer reviews</a>
            </LinkCol>

            <LinkCol>
              <FooterButton>
                <a href="#">
                  <div>
                    <img src={Google} alt="google play" />
                  </div>
                </a>
                <p>Download App Get 10% Discount</p>
              </FooterButton>

              <FooterButton>
                <a href="#">
                  <div>
                    <img src={Apple} alt="App store" />
                  </div>
                </a>
                <p>Download App Get 20% Discount</p>
              </FooterButton>
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
            </LinkCol>
          </FtrCtrRight>
        </FooterCenter>

        <FooterBottom>
          <div>
            <p>
              Copyright 2024 &#169; Grogin WooCommerce WordPress Theme. All
              right reserved.Powered by <span>KLBTheme</span>{" "}
            </p>
            <PaymentLogo>
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
            </PaymentLogo>
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
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  justify-content: center;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  color: #111827;
  background-color: #4b556314;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin-inline: auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 50px 0px;
  border-bottom: 1px solid #6b72806d;

  @media all and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const FtrTopLeft = styled.div`
  width: 350px;
  p {
    font-size: 13px;
    color: #6b7280;
    margin: 0px;
  }
  h3 {
    font-size: 20px;
    margin: 0px 0px 20px 0px;
  }

  @media all and (max-width: 768px) {
    margin-inline: auto;
  }
`;

const FtrTopLRight = styled.div`
  width: 450px;

  p {
    font-size: 11px;
    color: #6b7280;
  }

  a {
    font-size: 11px;
    color: #634c9f;
  }

  div {
    width: 450px;
    border: 1px solid #6b7280;
    border-radius: 7px;
    overflow: hidden;
    margin: 0px;
    padding: 0px;

    @media all and (max-width: 600px) {
      width: 400px;
      margin-inline: auto;
    }
  }

  div input {
    width: 85%;
    padding: 16px 7px;
    box-sizing: border-box;
    border: none;
  }

  div button {
    width: 15%;
    padding: 16px 7px;
    border: none;
    background-color: #634c9f;
    color: #fff;
  }
  @media all and (max-width: 768px) {
    margin-inline: auto;
  }
  @media all and (max-width: 600px) {
    width: 400px;
  }
`;

const FooterCenter = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 50px 0px;
  border-bottom: 1px solid #6b72806d;

  h4 {
    margin-top: 0px;
  }

  @media all and (max-width: 600px) {
    justify-content: center;   
  }
`;

const FtrCtrLeft = styled.div`
  width: 320px;

  h4 {
    font-size: 14px;
  }

  p {
    font-size: 13px;
    color: #6b7280;
    padding-right: 50px;

    @media all and (max-width: 600px) {
      padding: 0px;
  }
  }

  a {
    color: #111827;
  }
  @media all and (max-width: 600px) {
    text-align: center;
  }
`;

const FooterContact = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    font-size: 28px;
    margin-right: 20px;
  }

  @media all and (max-width: 600px) {
    justify-content: center;
  }
`;

const FtrCtrRight = styled.div`
  display: flex;
  gap: 20px;

  a {
    display: flex;
    margin-bottom: 7px;
    font-size: 13px;
    color: #6b7280;
  }

  @media all and (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const LinkCol = styled.div`
  width: 25%;

  p {
    font-size: 14px;
    margin: 60px 0px 20px 0px;
  }

  ul {
    display: flex;
    justify-content: left;
    gap: 8px;
    margin-bottom: 0px;
  }

  ul li {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
  }

  @media all and (max-width: 992px) {
    flex-basis: 40%;
  }
  &:last-child {
    @media all and (max-width: 768px) {
      display: none;
    }
  }
  @media all and (max-width: 600px) {
    display: none;
  }

`;

const FooterButton = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  margin-bottom: 10px;

  p {
    color: #6b7280;
    font-size: 10px;
    margin: 0px 0px 0px 8px;
  }

  a div {
    display: flex;
    align-items: center;
    width: 110px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 12px;
    color: #6b7280;

    @media all and (max-width: 1024px) {
      display: none;
    }
  }

  span {
    color: #634c9f;
    font-weight: 600;
  }
  ul {
    display: flex;
    gap: 15px;
  }
  ul li {
    display: flex;
    align-items: center;
  }
  a {
    font-size: 12px;
    color: #6b7280;
  }
`;

const PaymentLogo = styled.ul`
  li {
    width: 50px;
  }

  @media all and (max-width: 768px) {
    display: none !important;
  }
`;

export default Footer;
