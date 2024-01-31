import React from "react";
import { data } from "../utils/data";
import Image from "next/image";
import { ProductContainer } from "@/assets/styles";

const Products = () => {
  const { shop } = data;
  return (
    <ProductContainer id="collections">
      <h3>Discover unique art for your space</h3>
      <div className="gallery">
        {shop.map((product) => {
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
                <p className="ratings">ratings: {product.rating}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ProductContainer>
  );
};


export default Products;
