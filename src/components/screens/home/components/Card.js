import React from "react";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import data from "../../../../assets/test data/data";


const Card = () => {

    const cat_data = useSelector((state) => state.filter.categories);
    const brand_data = useSelector((state) => state.filter.brands);

    const cat = data.filter(item => cat_data.includes(item.category));
    const brand = data.filter(item => brand_data.includes(item.brand));

    let list_data = cat;

    if(brand.length !== 0){
        list_data = brand;
    }
    
  return (
    <CardContainer>

        {list_data.map(product => (
            <CardEach key={product.id}>
            <Link to={`/product/${product.id}`} className="product-link">
                <CardImg>
                    <img src={product.image} alt="" />
                </CardImg>
                <CardTitle>{product.name}</CardTitle>
            </Link>

            <CardRating>
                <Rating name="read-only" value={product.rating} precision={0.1} size="small" readOnly />
                <CardRatingValue>{product.rating}</CardRatingValue>
            </CardRating>

            <CardPrice>
                <span>${product.price}</span>
                <span>${product.mrprice}</span>
            </CardPrice>

            <CardCart>
                <span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span>IN STOCK</span>
            </CardCart>
            </CardEach>
        ))}

    </CardContainer>
  );
};


const CardContainer = styled.div`
    background: #FFF;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Changed min width to 1fr */
    border: 1px solid #6b72804f;
    border-radius: 7px;
    margin-bottom: 20px;

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adjust the minimum width */
    }
`;

const CardEach = styled.div`
    text-align: left;
    padding: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #6b72804f;
    border-right: 1px solid #6b72804f;

    a{
        color: #111827;
    }
`;

const CardImg = styled.span`
    display: block;
    margin-bottom: 10px;
    border-bottom: 1px solid #6b72804f;
`;

const CardTitle = styled.span`
    font-size: 13px;
    font-weight: 600;
`;

const CardRating = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 5px;
    color: #4B5563;
`;

const CardRatingValue = styled.span`
    font-size: 13px;
    border: 1px solid #6b72804f;
    padding: 1px 5px;
    border-radius: 3px;
`;

const CardPrice = styled.div`
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

const CardCart = styled.div`
    display: flex;
    align-items: center;
    margin-block: 10px;
    
    span:first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    border-radius: 7px;
    background: green;
    color: #fff;
    margin-right: 15px;
    }

    span:last-child {
    color: green;
    font-weight: 600;
    font-size: 12px;
    }
`;

export default Card;
