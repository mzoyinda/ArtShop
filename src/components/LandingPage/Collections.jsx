"use client";

import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { ProductContainer } from "@/assets/styles";
import ProductsHeader from "./ProductsHeader";
import Ratings from "../Ratings";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "@/redux/slices/productSlice";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/slices/cartSlice";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const { loading, products } = useSelector((state) => state.productData);

  // fetch products
  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  const addToCartHandler = ({ product }) => {
    let newQty = qty;
    const existItem = cartItems.find((x) => x.row_id === product.row_id);

    // if item exist increase the quantity
    if (existItem) {
      newQty = existItem.qty + 1;
    }

    // send item to cart
    dispatch(addToCart({ ...product, qty: newQty }));

    // notify success
    toast.success("Product Now in Cart!", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <ProductContainer id="collections">
      <ToastContainer />
      <h3>Discover unique art for your space</h3>
      {loading ? (
        <div>Fetching Collections...</div>
      ) : (
        <>
          <ProductsHeader
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
          />
          <div className="gallery">
            {filteredProducts.length === 0 ? (
              <div>Sorry.. Art not found!</div>
            ) : (
              filteredProducts.map((product) => {
                return (
                  <div className="box" key={product.row_id}>
                    <div className="image">
                      <Image
                        src={`${product.url}`}
                        alt="autumn"
                        width={500}
                        height={300}
                        // fill
                        priority
                      />
                      <button onClick={(e) => addToCartHandler({ product })}>
                        {" "}
                        Add to cart
                      </button>
                    </div>
                    <div className="bottom">
                      <div className="flexbox">
                        <h4>{product.name}</h4>
                        <p className="price">$ {product.price}</p>
                      </div>
                      <p>{product.details}</p>
                      <Ratings show="true" rate={product.rating} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </>
      )}
    </ProductContainer>
  );
};

export default Products;
