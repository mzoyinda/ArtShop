import { Banner } from '@/assets/styles'
import Image from "next/image";
import React from "react";
import Ratings from '../Ratings';
import { useRouter } from 'next/navigation';

const Herosection = () => {
  const router = useRouter();
  return (
    <Banner>
      <div className="wrapper">
        <Image
          alt="quote frame"
          width={100}
          height={140}
          className="frame1"
          // priority 
          src="/sunshine.jpg"
        />
        <Image
          width={100}
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
        <button onClick={() => router.push("/#collections")}>Explore All</button>
        <p>4.8 star rating . Excellent</p>
        <Ratings rate="4.8" />
      </div>
      <div className="gallery">
        <h2>
          Spice up your space <br /> with stylish posters
        </h2>
      </div>
    </Banner>
  );
};

export default Herosection;
