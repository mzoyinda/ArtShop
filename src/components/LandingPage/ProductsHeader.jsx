import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../utils/data";

const ProductsHeader = ({setFilteredProducts}) => {
    const { shop } = data;

  const [filters, setFilters] = useState({
    s: "",
    sort: "",
  });


  useEffect(() => {
      console.log(filters)
    let products = shop.filter(
      (p) =>
        p.name.toLowerCase().indexOf(filters.s.toString().toLowerCase()) >= 0 ||
        p.details.toLowerCase().indexOf(filters.s.toString().toLowerCase()) >= 0
    );

    if (filters.sort === "asc" || filters.sort === "desc") {
      products.sort((a, b) => {
        const diff = a.price - b.price;

        if (diff === 0) return 0;

        const sign = Math.abs(diff) / diff; //-1, 1

        return filters.sort === "asc" ? sign : -sign;
      });
    }

    setFilteredProducts(products);
  }, [filters]);
  
  
  const search = (s) => {
    setFilters({
      ...filters,
      s,
    });
  };

  const sort = (sort) => {
    setFilters({
      ...filters,
      sort,
    });
  };

  return (
    <FilterContainer>
      <input
        type="search"
        placeholder="Search for Art..."
        onChange={(e) => search(e.target.value)}
        name="search"
        id="search"
      />
      <div className="group">
        <label htmlFor="filter">Filter Price By:</label>
        <select
          name="filter"
          id="filter"
          onChange={(e) => sort(e.target.value)}
        >
          <option value="asc">Lowest first</option>
          <option value="desc">Premium first</option>
        </select>
      </div>
    </FilterContainer>
  );
};

const FilterContainer = styled.section`
  background-color: #e6e6e6;
  width: 90%;
  padding: 10px 15px;
  margin: 0 24px;
  margin-top: 20px;

  input {
    display: inline;
    margin-left: 2px;
  }

  input,
  select {
    width: 100%;
    max-width: 250px;
    padding: 5px 10px;
    height: 40px;
    border: transparent;
    outline: none;
    border-radius: 12px;

    &:focus,
    &:active {
      border: 1px solid gray;
      outline: none;
    }
  }

  label {
    font-size: 14px;
    width: max-content;
  }

  .group {
    display: flex;
    max-width: 280px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;

    select {
      max-width: 150px;
      margin-left: 10px;
      height: 40px;
    }
  }

  @media (min-width: 680px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    padding: 10px;
    margin-bottom: 30px;

    .group {
      display: flex;
      width: 350px;
      align-items: center;
      justify-content: center;

      select {
        max-width: 150px;
        margin-left: 10px;
      }
    }
  }
`;
export default ProductsHeader;
