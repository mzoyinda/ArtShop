"use client";

import { Button, CartContainer } from "@/assets/styles";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
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
              <tr>
                <td className="flexbox">
                  <Image
                    src="/autumn.jpg"
                    width={40}
                    height={60}
                    alt="image name"
                  />
                  <span>Autumn</span>
                </td>
                <td>
                  <select name="qty" id="qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>{" "}
                </td>
                <td>$120</td>
                <td className="delete">
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td className="flexbox">
                  <Image
                    src="/autumn.jpg"
                    width={40}
                    height={60}
                    alt="image name"
                  />
                  <span>Autumn</span>
                </td>
                <td>
                  <select name="qty" id="qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>{" "}
                </td>
                <td>$120</td>
                <td className="delete">
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="total">
          <h3>Subtotal (5) : $205.00</h3>
          <Button>Proceed to Checkout</Button>
        </div>
      </div>
      <div className="container">
        {" "}
        <Button>Continue Shopping</Button>
      </div>
    </CartContainer>
  );
};

export default page;
