import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import data from "../../assets/test data/data";
import { useDispatch } from "react-redux";
import { setCategories, setBrands } from "../../features/filterSlice";
import { faClose, faFilter, faList } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SideBar = () => {
  const categoryArray = [];
  const brandArray = [];
  const selectedBrandArray = [];
  const itemCounts = {};

  const dispatch = useDispatch();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredData, setFilteredData] = useState(data);


  filteredData.forEach((product) => {
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
    const filtered_data = filteredData.filter((product) =>
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

  const prices = data.map(product => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  

  const [value, setValue] = useState([minPrice, maxPrice]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterDataByPrice(newValue);
  };

  
  const handleInputChange = (event, index) => {
    const newValue = [...value];
    newValue[index] =
      event.target.value === "" ? 0 : Number(event.target.value);
    setValue(newValue);
    filterDataByPrice(newValue);

  };

  const valuetext = (value) => {
    return `$${value}`;
  };

  const filterDataByPrice = (priceRange) => {
    const filtered = data.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    setFilteredData(filtered);
  };

  useEffect(() => {
    let data_cat = categoryArray;

    if (selectedCategories.length !== 0) {
      data_cat = selectedCategories;
    }

    dispatch(setCategories(data_cat));
    dispatch(setBrands(selectedBrands));
    filterDataByPrice(value);

  }, [dispatch, selectedCategories, selectedBrands, value]);

  const [sideHamOpen, setSideHamOpen] = useState(false);

  console.log(sideHamOpen);

  const toggleSideHam = () => {
    setSideHamOpen(!sideHamOpen);
    console.log(sideHamOpen);
  };

  return (
    <>
      <SideHamOverlay
        style={{ display: sideHamOpen ? "block" : "none" }}
        onClick={toggleSideHam}
      ></SideHamOverlay>
      <SidebarHam>
        <button onClick={toggleSideHam}>
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter</span>
        </button>
      </SidebarHam>

      <Sidebar className={`${sideHamOpen ? "sideham " : ""} `}>
        <SideHamClose style={{ display: sideHamOpen ? "flex" : "none" }}>
          <button onClick={toggleSideHam}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </SideHamClose>

        <PriceFilter>
          <p>Widget price filter</p>

          <PriceDiv>
            <MinPrice>
              <span>Min price</span>
              <div>
                <input
                  type="text"
                  value={value[0]}
                  onChange={(e) => {
                    handleInputChange(e, 0); 
                  }}
                  min={minPrice}
                  max={maxPrice}
                />
              </div>
            </MinPrice>

            <span className="seperator"> - </span>

            <MaxPrice>
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
            </MaxPrice>
          </PriceDiv>

          <SliderDiv>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={minPrice}
                max={maxPrice}
                step={.1}
              />
            </Box>
          </SliderDiv>

          <Flex>
            <div>
              Price:
              <span className="from">${value[0]}</span>-
              <span className="to">${value[1]}</span>
            </div>
            <button>Filter</button>
          </Flex>
        </PriceFilter>

        <ProductCategories>
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
        </ProductCategories>

        <FilterColor>
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
        </FilterColor>

        <FilterBrand>
          <p>Filter by Brands</p>

          <ul>
            {selectedCategories.length === 0
              ? 
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
              : //
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
        </FilterBrand>

        <ProductStatus>
          <p>Product Status</p>

          <ul>
            <li>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">In Stock</label>
            </li>
          </ul>
        </ProductStatus>
      </Sidebar>
    </>
  );
};

const SideHamOverlay = styled.div`
  height: 300vh;
  width: 100vw;
  position: absolute;
  background: #00000015;
  top: 0;
  right: 0;
`;

const SidebarHam = styled.div`
  display: none;
  width: 150px;
  margin-top: 15px;

  button {
    width: 200px;
    height: 40px;
    font-size: 20px;
    margin-left: 0px;
    font-family: inter;
    font-weight: 100;
    border-radius: 7px;
    border: none;

  }

  button span {
    font-size: 18px;
    margin-left: 10px;
  }

  @media all and (max-width: 992px) {
      display: block;
    }
`;

const Sidebar = styled.div`
  width: 250px;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  padding-right: 30px;

  &.sideham {
    display: block !important;
    width: 50vw;
    height: fit-content;
    background: #ffffff;
    position: absolute;
    top: 230px;
    left: 0;
    text-align: left;
    z-index: 1;
    box-sizing: border-box;
    padding: 30px;

   
  }

  @media all and (max-width: 992px) {
    display: none;
  }
`;

const SideHamClose = styled.div`
  justify-content: end;

  button {
    width: fit-content;
    height: fit-content;
    border: none;
    font-size: 20px;
    color: #000;
    background: none;
  }
`;

const PriceFilter = styled.div`
  border-bottom: 1px solid #6b72804f;
  padding-block: 15px;
  color: #030712;
  font-size: 14px;

  p {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 0px;
  }

  button {
    background-color: #e5e7eb;
    border: none;
    color: #030712;
    font-weight: bold;
    padding: 7px 16px;
    border-radius: 7px;
  }

  button:hover {
    background-color: #6b728057;
  }
`;

const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: inline-block;
    width: 110px;
    color: #6b7280;
    font-size: 12px;
    text-align: left;
    margin-bottom: 5px;
  }
  &.seperator {
    margin-block: 15px 0px;
    width: fit-content;
  }
`;

const MinPrice = styled.div`
  width: fit-content;

  div {
    display: inline-flex;
    margin: 0px;
    height: 40px;
    width: 110px;
  }
  input {
    width: 100%;
    padding: 1px 16px;
    border: 1px solid rgb(209, 213, 219);
    outline: none;
    border-radius: 8px;

    &:focus {
      outline: 2px solid #634c9f;
    }
  }
`;

const MaxPrice = styled.div`
  width: fit-content;
  margin: 0px;
  padding: 0px;

  div {
    display: inline-flex;
    margin: 0px;
    height: 40px;
    width: 110px;
  }

  input {
    width: 100%;
    padding: 1px 16px;
    border: 1px solid rgb(209, 213, 219);
    outline: none;
    border-radius: 8px;

    &:focus {
      outline: 2px solid #634c9f;
    }
  }
`;

const SliderDiv = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductCategories = styled.div`
  border-bottom: 1px solid #6b72804f;
  padding-block: 15px;
  color: #030712;
  font-size: 14px;

  p {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 0px;
  }

  ul li {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #030712;
    margin-bottom: 5px;
  }

  ul li {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #030712;
    margin-bottom: 5px;
  }

  ul li input {
    accent-color: #634c9f;
  }
`;

const FilterColor = styled.div`
  border-bottom: 1px solid #6b72804f;
  padding-block: 15px;
  color: #030712;
  font-size: 14px;

  p {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 0px;
  }

  ul li {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #030712;
    margin-bottom: 5px;
  }

  ul li div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  ul li .colordot {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: green;
  }

  ul li a,
  ul li span {
    color: #030712;
  }
`;

const FilterBrand = styled.div`
  border-bottom: 1px solid #6b72804f;
  padding-block: 15px;
  color: #030712;
  font-size: 14px;
  color: #030712;

  p {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 0px;
  }

  ul li {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #030712;
    margin-bottom: 5px;
  }

  ul li div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const ProductStatus = styled.div`
  p {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 0px;
    padding-top: 15px;

  }

  ul li {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #030712;
    margin-bottom: 5px;
  }

  ul li input {
    accent-color: #634c9f;
  }
`;

export default SideBar;
