// import { Banner } from '@/assets/styles'
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Herosection = () => {
  return (
    <Banner>
      <div className="wrapper">
        <Image
          alt="quote frame"
          width={100}
          height={140}
          className="frame1"
          src="/sunshine.png"
        />
        <Image
          width={160}
          height={140}
          alt="quote frame"
          className="frame2"
          src="/self-love.png"
        />
        <h1>Best artwork collections</h1>
        <p>
          Explore a world of creativity with Art.shop&apos;s curated collections
          of posters
        </p>
        <button>Explore All</button>
        <p>4.8 star rating . Excellent</p>
      </div>
      <div className="gallery">
        <h2>
          Spice up your space <br /> with stylish posters
        </h2>
      </div>
    </Banner>
  );
};

export const Banner = styled.section`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 70vh;

  .wrapper {
    padding: 60px 24px;
    padding-bottom: 30px;
    .frame1,
    .frame2 {
      display: none;
    }

    h1 {
      font-size: 42px;
      letter-spacing: 0.3px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      font-weight: 500;
    }

    button {
      background-color: #ffe970;
      color: #201d46;
      padding: 15px 45px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 20px;
      margin: 25px auto;
    }
  }

  .gallery {
    position: relative;
    margin: 30px 0;
    width: 80vw;
    height: 250px;
    background-image: url("/frame.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;

    h2 {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      max-width: 460px;
      h1 {
        font-size: 72px;
        line-height: 70px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
      }

      .frame1,
      .frame2 {
        position: absolute;
        display: block;
        top: 150px;
        z-index: -1;
      }

      .frame1 {
        left: -32%;
        text-align: left;
      }
      .frame2 {
        top: 200px;
        right: -32%;
      }
    }
    .gallery {
      background-position: bottom;
      padding: 10px;
      height: 450px;

      h2 {
        position: absolute;
        display: block;
        bottom: 40px;
        font-size: 28px;
        font-weight: 600;
        left: 20px;
        background-color: #ffe970;
        letter-spacing: 1px;
        color: #201d46;
        border-radius: 10px;
        padding: 10px 20px;
      }
    }
  }
`;

export default Herosection;
