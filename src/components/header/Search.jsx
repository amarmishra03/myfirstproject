import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { elecProd } from "../Allinfo";
import { Electronics, SearchCard } from "../";

const uniqueCategory = [
  ...new Set(
    elecProd.map((items) => {
      return items.category;
    })
  ),
];

const Search = () => {
  //For nav filter
  const [products, setProducts] = useState(elecProd);
  const [menuCategories, setMenucategories] = useState(uniqueCategory);

  //Button Filter Function
  const filterItem = (category) => {
    const updatedList = elecProd.filter((prods) => {
      return prods.category === category;
    });
    setProducts(updatedList);
  };

  //For Navigate
  const navigate = useNavigate();

  //Search Function
  const searchData = (query) => {
    navigate(`/searchcard?query=${query}`);
  };

  return (
    <>
      <Navbar searchData={searchData} />
      <Routes>
        <Route
          path="/electronics"
          element={
            <Electronics
              products={products}
              menuCategories={menuCategories}
              filterItem={filterItem}
              setProducts={setProducts}
            />
          }
        />
        <Route exact path="/searchcard" element={<SearchCard />} />
      </Routes>
    </>
  );
};

export default Search;
