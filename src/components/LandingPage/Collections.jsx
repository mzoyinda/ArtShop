import React, { useState } from "react";
import { data } from "../utils/data";
import Image from "next/image";
import { ProductContainer } from "@/assets/styles";
import ProductsHeader from "./ProductsHeader";
import Ratings from "../Ratings";

const Products = () => {
  // const { shop } = data;
  
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <ProductContainer id="collections">
      <h3>Discover unique art for your space</h3>
      <ProductsHeader filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts}/>
      <div className="gallery">
        {filteredProducts.length === 0 ? (
          <div>Sorry.. Art not found!</div>
        ) : filteredProducts.map((product) => {
          return (
            <div className="box" key={product.row_id}>
              <div className="image">
                <Image
                  src={`${product.Image}`}
                  alt="autumn"
                  width={100}
                  height={300}
                />
                <button>Add to cart</button>
              </div>
              <div className="bottom">
                <div className="flexbox">
                  <h4>{product.name}</h4>
                  <p className="price">$ {product.price}</p>
                </div>
                <p>{product.details}</p>
                <p> <Ratings show="true" rate={product.rating} /></p>
              </div>
            </div>
          );
        })}
      </div>
    </ProductContainer>
  );
};


export default Products;
