import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./sidebar.css";

import data from "../../assets/test data/data";
import { useDispatch } from "react-redux";
import { setCategories, setBrands } from "../../features/filterSlice";
import { faClose, faFilter, faList } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const categoryArray = [];
  const brandArray = [];
  const selectedBrandArray = [];
  const itemCounts = {};

  const dispatch = useDispatch();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  data.forEach((product) => {
    if (!categoryArray.includes(product.category)) {
      categoryArray.push(product.category);
    }
    if (product.brand && !brandArray.includes(product.brand)) {
      brandArray.push(product.brand);
    }
  });

  brandArray.forEach((brand) => {
    itemCounts[brand] = 0;
  });
  data.forEach((item) => {
    if (item.brand !== "") {
      itemCounts[item.brand]++;
    }
  });

  const getBrandsByCategory = () => {
    const filtered_data = data.filter((product) =>
      selectedCategories.includes(product.category)
    );
    filtered_data.forEach((product) => {
      if (product.brand && !selectedBrandArray.includes(product.brand)) {
        selectedBrandArray.push(product.brand);
      }
    });
    selectedBrandArray.forEach((brand) => {
      itemCounts[brand] = 0;
    });
    filtered_data.forEach((item) => {
      if (item.brand !== "") {
        itemCounts[item.brand]++;
      }
    });
  };

  const handleCategoryCheckboxChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      const updatedCategories = prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category];
      return updatedCategories;
    });
  };

  const handleBrandCheckboxChange = (brand) => {
    setSelectedBrands((prevSelectedBrand) => {
      const updatedBrands = prevSelectedBrand.includes(brand)
        ? prevSelectedBrand.filter((cat) => cat !== brand)
        : [...prevSelectedBrand, brand];
      return updatedBrands;
    });
  };

  getBrandsByCategory();

  const [value, setValue] = useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event, index) => {
    const newValue = [...value];
    newValue[index] =
      event.target.value === "" ? 0 : Number(event.target.value);
    setValue(newValue);
  };

  const valuetext = (value) => {
    return `$${value}`;
  };

  useEffect(() => {
    let data_cat = categoryArray;

    if (selectedCategories.length !== 0) {
      data_cat = selectedCategories;
    }

    dispatch(setCategories(data_cat));
    dispatch(setBrands(selectedBrands));
  }, [dispatch, selectedCategories, selectedBrands]);



  const [sideHamOpen,setSideHamOpen] = useState(false);

  const toggleSideHam = () => {
    setSideHamOpen(!sideHamOpen);
  }


  return (
    <>
    <div className="sideHam_overlay" style={{ display: sideHamOpen ? 'block' : 'none' }} onClick={toggleSideHam}></div>
    <div className="sidebar_ham">
      <button onClick={toggleSideHam}>
        <FontAwesomeIcon icon={faFilter} />
         <span>Filter</span>
      </button>
    </div>

    <div  className={`${sideHamOpen ? "sideham " : ""} sidebar`}>
      <div className="sideHam_close"  style={{ display: sideHamOpen ? 'flex' : 'none' }}>
        <button onClick={toggleSideHam}><FontAwesomeIcon icon={faClose}/></button>
      </div>
      <div className="price_filter">
        <p>Widget price filter</p>

        <div className="price_div">
          <div className="min_price">
            <span>Min price</span>
            <div>
              <input
                type="text"
                value={value[0]}
                onChange={(e) => {
                  handleInputChange(e, 0);
                }}
              />
            </div>
          </div>

          <span className="seperator"> - </span>

          <div className="max_price">
            <span>Max price</span>
            <div>
              <input
                type="text"
                value={value[1]}
                onChange={(e) => {
                  handleInputChange(e, 1);
                }}
              />
            </div>
          </div>
        </div>

        <div className="slider">
          <Box sx={{ width: 300  }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={0}
              max={100}
              step={1}
            />
          </Box>
        </div>

        <div className="flex">
          <div>
            Price:
            <span className="from">${value[0]}</span>-
            <span className="to">${value[1]}</span>
          </div>
          <button>Filter</button>
        </div>
      </div>

      <div className="product_categories">
        <p>Product Categories</p>

        <ul>
          {categoryArray.map((category) => (
            <li key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryCheckboxChange(category)}
                id={`checkbox_${category}`}
              />
              <label htmlFor={`checkbox_${category}`}>{category}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter_color">
        <p>Filter by Color</p>

        <ul>
          <li>
            <div>
              <span className="colordot"></span>
              <a href="#">Green</a>
            </div>

            <span>(1)</span>
          </li>
          <li>
            <div>
              <span className="colordot"></span>
              <a href="#">Green</a>
            </div>
            <span>(1)</span>
          </li>
        </ul>
      </div>

      <div className="filter_brand">
        <p>Filter by Brands</p>

        <ul>
          {selectedCategories.length === 0
            ? // Render selectedBrandArray if selectedBrands is empty
              brandArray.map((brand) => (
                <li key={brand}>
                  <div>
                    <input
                      type="checkbox"
                      id={`checkbox_${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandCheckboxChange(brand)}
                    />
                    <label htmlFor={`checkbox_${brand}`}>{brand}</label>
                  </div>
                  <span>({itemCounts[brand]})</span>
                </li>
              ))
            : // Render selectedBrands if it's not empty
              selectedBrandArray.map((brand) => (
                <li key={brand}>
                  <div>
                    <input
                      type="checkbox"
                      id={`checkbox_${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandCheckboxChange(brand)}
                    />
                    <label htmlFor={`checkbox_${brand}`}>{brand}</label>
                  </div>
                  <span>({itemCounts[brand]})</span>
                </li>
              ))}
        </ul>
      </div>

      <div className="product_status">
        <p>Product Status</p>

        <ul>
          <li>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">In Stock</label>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default SideBar;
