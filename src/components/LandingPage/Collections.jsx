import React, { useEffect, useState } from "react";

import {Bounce, ToastContainer, toast } from 'react-toastify';

import { data } from "../../utils/data";
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
  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)
  const router = useRouter()
  const [qty, setQty] = useState(1)

  const { loading, products } = useSelector((state) => state.productData);

  useEffect(() => {
    // dispatch(fetchProductData());
  }, []);
 
  const addToCartHandler = ({product}) => {
    let newQty = qty;

  
      const existItem = cartItems.find((x) => x.row_id === product.row_id)
      if (existItem) {
          newQty = existItem.qty + 1
        } 

    let a =cartItems.reduce((a, c) => a + c.qty, 0)
    console.log(a, cartItems)
    
    dispatch(addToCart({ ...product, qty: newQty }))
    toast.success('Product Now in Cart!', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
      });
  }


  return (
    <ProductContainer id="collections">
       <ToastContainer />
      <h3>Discover unique art for your space</h3>
      {loading && products.length === 0 ? (
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
                        width={100}
                        height={300}
                      />
                      <button onClick={(e)=> addToCartHandler({product})}> Add to cart</button>
                    </div>
                    <div className="bottom">
                      <div className="flexbox">
                        <h4>{product.name}</h4>
                        <p className="price">$ {product.price}</p>
                      </div>
                      <p>{product.details}</p>
                      <p>
                        {" "}
                        <Ratings show="true" rate={product.rating} />
                      </p>
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
