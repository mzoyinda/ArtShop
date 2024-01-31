"use client";

import { SuccessContainer } from "@/assets/styles";
import React from "react";
import styled from "styled-components";

const Success = () => {
  return (
    <SuccessContainer>
      <div className="wrapper">
        <h1>Thank You!</h1>
        <p>
          You have officially one of the first awesome people to test{" "}
          <strong>Art.shop</strong>{" "}
        </p>
        We would let you know when the shop has been officially launched!
        <button> Go back to Art Shop</button>
      </div>
    </SuccessContainer>
  );
};


export default Success;
