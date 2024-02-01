"use client";

import { Button, CartContainer, FlexBox } from "@/assets/styles";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <FlexBox>
          <h3>Cart is empty.&nbsp;</h3> 
          <Button onClick={() => router.push("/")}>Go shopping</Button>
        </FlexBox>
      ) : (
        <div className="group">
          <div className="wrapper">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.row_id}>
                    <td className="flexbox">
                      <Image
                        src={item.url}
                        alt={item.name}
                        width={40}
                        height={60}
                      />
                      <span>{item.name}</span>
                    </td>
                    <td>
                      <input
                        name="qty"
                        id="qty"
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      />
                    </td>
                    <td>${item.price}</td>
                    <td className="delete">
                      <button
                        onClick={() => removeFromCartHandler(item.row_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="total">
            <h3>
              {" "}
              Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) : $
              {itemsPrice}
            </h3>
            <Button onClick={() => router.push("/success")}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
       {cartItems.length === 0 ?  "" :(
      <div className="container">
        <Button onClick={() => router.push("/")}>
            Continue Shopping
        </Button>
      </div>
       )}
    </CartContainer>
  );
};

export default Cart;
