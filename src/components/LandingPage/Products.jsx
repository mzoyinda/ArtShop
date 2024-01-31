import React from "react";
import styled from "styled-components";
import { data } from "../utils/data";
import Image from "next/image";

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

const ProductContainer = styled.section`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    max-width: 250px;
  }
  .gallery {
    .box {
      margin-top: 20px;
      min-height: 450px;

      .image {
        position: relative;
        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        button {
          position: absolute;
          width: 75%;
          bottom: 5px;
          right: 0px;
          color: #201d46;
          background-color: #e6e6e6;
          padding: 15px 15px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.5s ease-in-out;
          &:hover {
            cursor: pointer;
            width: 100%;
            text-transform: uppercase;
            color: #ededdd;
            background-color: #201d46;
          }
        }
      }
.bottom{
    padding: 10px;
    h4 {
      font-size: 18px;
      font-weight: 600;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    p {
      /* text-align: center; */
    }
    .flexbox {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;

      .price {
        font-size: 16px;
        font-weight: 600;
      }
    }
}
    }
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 36px;
      max-width: 350px;
      line-height: 32px;
      margin-bottom: 20px;
    }

    .gallery {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;
      .box {
        max-width: 260px;
        border: 1px solid #e6e6e6;
      }
    }
  }
`;

export default Products;
