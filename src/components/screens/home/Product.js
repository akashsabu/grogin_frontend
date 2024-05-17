import React from "react";
import Zoom from "react-img-zoom";
import Rating from "@mui/material/Rating";

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
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

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

      <ProductWrapper>
        <ProductTop key={product.id}>
          <ProductZoom>
            <Zoom img={product.image} zoomScale={2} width={500} height={500} />
          </ProductZoom>
         
          <div>
            <h1>{product.name}</h1>
            <ProductZoomMobile>
            <Zoom img={product.image} zoomScale={2} width={250} height={250} />
          </ProductZoomMobile>

            <div>
              <ProductRating>
                <Rating
                  name="read-only"
                  value={product.rating}
                  precision={0.1}
                  size="small"
                  readOnly
                />
                <ProductRatingValue>{product.rating}</ProductRatingValue>|
                <p>SKU:{product.sku}</p>
              </ProductRating>
            </div>

            <Border></Border>

            <p>{product.description}</p>
            <ProductPrice>
              <span>${product.price}</span>
              <span>${product.mrprice}</span>
            </ProductPrice>

            <ProductButton>
              Order on Whatsapp
            </ProductButton>

   
            <ProductBuy> 
              <ProductCounter>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </ProductCounter>

              <ProductButton>
                <span>
                  <FontAwesomeIcon icon={faBagShopping} />
                </span>
                Add to cart
              </ProductButton>

              <ProductButton className="black">
                <span>
                  <FontAwesomeIcon icon={faBagShopping} />
                </span>
                Buy Now
              </ProductButton>
            </ProductBuy>

            <ProductDescription>
              <div>
                <ProductIconDiv>
                  <FontAwesomeIcon icon={faWallet} />
                </ProductIconDiv>
                <p>
                  <strong>Payment. </strong>Payment upon receipt of goods,
                  Payment by card in the department, Google Pay, Online card,
                  -5% discount in case of payment
                </p>
              </div>

              <div>
                <ProductIconDiv>
                  <FontAwesomeIcon icon={faShield} />
                </ProductIconDiv>
                <p>
                  <strong>Warranty.</strong> The Consumer Protection Act does
                  not provide for the return of this product of proper quality.
                </p>
              </div>
            </ProductDescription>

            <ProductWishlist>
              <div>
                <ProductWishlistButton>
                  <FontAwesomeIcon icon={faHeart} />
                </ProductWishlistButton>
                <span>Add to wishlist</span>
              </div>
              <div>
                <ProductWishlistButton>
                  <FontAwesomeIcon icon={faShare} />
                </ProductWishlistButton>
                <span>Share this Product</span>
              </div>
              <div>
                <ProductWishlistButton>
                  <FontAwesomeIcon icon={faCodeCompare} />
                </ProductWishlistButton>
                <span>Compare</span>
              </div>
            </ProductWishlist>
          </div>
        </ProductTop>
        
      </ProductWrapper>
      <Footer />
    </>
  );
};


const ProductWrapper = styled.div`
  justify-content: center;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  color: #111827;
  max-width: 1200px;
  width: 90%;
  margin-inline: auto;
`;

const Border = styled.div`
  border-bottom: 1px solid #4b556361;
`;

const ProductTop = styled.div`
  display: flex;
  gap: 40px;
  padding: 30px 0px;  

  h1 {
    font-size: 38px;
    margin: 0px 0px 10px 0px;
    text-align: left;
  }

  p {
    color: #4B5563;
    font-size: 14px;
  }
`;

const ProductBuy = styled.div`
 display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const ProductRating = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 5px;
    color: #4B5563;
`;

const ProductRatingValue = styled.span`
    font-size: 13px;
    border: 1px solid #6b72804f;
    padding: 1px 5px;
    border-radius: 3px;
`;

const ProductPrice = styled.div`
    margin-block: 10px;

    span:first-child {
    font-size: 22px;
    font-weight: 600;
    color: #dc2626;
    margin-right: 10px;
    }

    span:last-child {
    font-size: 14px;
    text-decoration: line-through #dc2626;
    }   
`;


const ProductCounter = styled.div`
  display: flex;
  gap: 5px;
  height: fit-content;
  align-items: center;
  border-radius: 7px;
  border: 1px solid #212529;

  button {
    padding: 14px 18px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    background: none;
    color: #111827;
  }
`;

const ProductButton = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  min-width: 160px;
  width: fit-content;
  font-size: 14px;
  color: #fff;
  padding: 14px 18px;
  margin-block: 10px;
  text-align: center;
  border-radius: 7px;
  background: #16A34A;

  &.black {
    background: #212529 !important;
  }
`;

const ProductDescription = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #4b556361;
    padding: 0px 15px;
    color: #6b7280;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  div:last-child {
    margin-bottom: 20px;
    border-top: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }

`;

const ProductIconDiv = styled.div`
  border: none !important;
`;

const ProductWishlist = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  div span {
    font-size: 13px;
    width: fit-content;
    white-space: nowrap;
  }
`;

const ProductWishlistButton = styled.button`
  padding: 12px 12px;
  border-radius: 7px;
  background: none;
  border: 1px solid #4b556357;
  cursor: pointer;
  color: #111827;

  &:hover {
    background: #4b55630f;
  }
`;

const ProductZoom = styled.div`

  @media all and (max-width:992px){
    display: none;
  }
`;
const ProductZoomMobile = styled.div`
  display: none;

  @media all and (max-width:992px){
    display: block;
  }
`;









export default Product;
