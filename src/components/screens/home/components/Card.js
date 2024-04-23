import React from "react";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./card.css";
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

    <div className="card_container">

        {list_data.map(product => (
            <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`} className="product-link">
                <span className="card_img">
                    <img src={product.image} alt="" />
                </span>
                <span className="card_name">{product.name}</span>
            </Link>

            <div className="card_rating">
                <Rating name="read-only" value={product.rating} precision={0.1} size="small" readOnly />
                <span className="card_rating_value">{product.rating}</span>
            </div>

            <div className="card_price">
                <span>${product.price}</span>
                <span>${product.mrprice}</span>
            </div>

            <div className="card_cart">
                <span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
                <span>IN STOCK</span>
            </div>
            </div>
        ))}

    </div>
  );
};

export default Card;
