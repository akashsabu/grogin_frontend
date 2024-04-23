import React from "react";
import Zoom from "react-img-zoom";
import Rating from "@mui/material/Rating";

import "./product.css";
import data from "../../../assets/test data/data.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Header from "./../../includes/Header";
import Footer from "../../includes/Footer";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const getProductById = (id) => {
    return data.find((product) => product.id === id);
  };

  const productId = parseInt(id);
  const product = getProductById(productId);
  console.log(product);

  return (
    <>
      <Header />
      <div className="product wrapper">
        <div className="product_top" key={product.id}>
          <div className="product_zoom">
            <Zoom img={product.image} zoomScale={2} width={500} height={500} />
          </div>
         
          <div>
            <h1>{product.name}</h1>
            <div className="product_zoom_mobile">
            <Zoom img={product.image} zoomScale={2} width={250} height={250} />
          </div>

            <div>
              <div className="card_rating">
                <Rating
                  name="read-only"
                  value={product.rating}
                  precision={0.1}
                  size="small"
                  readOnly
                />
                <span className="card_rating_value">{product.rating}</span>|
                <p>SKU:{product.sku}</p>
              </div>
            </div>

            <div className="br"></div>

            <p>{product.description}</p>
            <div className="card_price">
              <span>${product.price}</span>
              <span>${product.mrprice}</span>
            </div>

            <a className="product_button" href="">
              Order on Whatsapp
            </a>

            <div className="product_buy">
              <div className="product_counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <a className="product_button green" href="">
                <span>
                  <FontAwesomeIcon icon={faBagShopping} />
                </span>
                Add to cart
              </a>

              <a className="product_button black" href="">
                <span>
                  <FontAwesomeIcon icon={faBagShopping} />
                </span>
                Buy Now
              </a>
            </div>

            <div className="payment_description">
              <div>
                <div className="payment_icon_div">
                  <FontAwesomeIcon icon={faWallet} />
                </div>
                <p>
                  <strong>Payment. </strong>Payment upon receipt of goods,
                  Payment by card in the department, Google Pay, Online card,
                  -5% discount in case of payment
                </p>
              </div>

              <div>
                <div className="payment_icon_div">
                  <FontAwesomeIcon icon={faShield} />
                </div>
                <p>
                  <strong>Warranty.</strong> The Consumer Protection Act does
                  not provide for the return of this product of proper quality.
                </p>
              </div>
            </div>

            <div className="product_wishlist">
              <div>
                <button className="product_wishlist_button">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <span>Add to wishlist</span>
              </div>
              <div>
                <button className="product_wishlist_button">
                  <FontAwesomeIcon icon={faShare} />
                </button>
                <span>Share this Product</span>
              </div>
              <div>
                <button className="product_wishlist_button">
                  <FontAwesomeIcon icon={faCodeCompare} />
                </button>
                <span>Compare</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Product;
