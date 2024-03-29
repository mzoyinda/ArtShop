import React, { useEffect, useState } from "react";
import { FilterContainer } from "@/assets/styles";
import { useDispatch, useSelector } from "react-redux";

const ProductsHeader = ({ setFilteredProducts }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productData);

  const [filters, setFilters] = useState({
    query: "",
    sort: "",
  });

  useEffect(() => {
    let productData = products.filter(
      (p) =>
        p.name.toLowerCase().indexOf(filters.query.toString().toLowerCase()) >=
        0
    );

    if (filters.sort === "asc" || filters.sort === "desc") {
      productData.sort((a, b) => {
        const diff = a.price - b.price;

        if (diff === 0) return 0;

        const sign = Math.abs(diff) / diff; //-1, 1

        return filters.sort === "asc" ? sign : -sign;
      });
    }
    setFilteredProducts(productData);
  }, [filters, products]);

  const search = (query) => {
    setFilters({
      ...filters,
      query,
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

export default ProductsHeader;
