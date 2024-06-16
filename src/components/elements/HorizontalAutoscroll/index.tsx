import React from "react";
import { Banner } from "./Banner"; // Import Banner component if it's in another file
import "./styles.css";

type Image = {
    id: string;
    image: string;
  };  

const images = [
    "/Looking-for-sponsor.png",
    "/Looking-for-sponsor-decor.png",
    "/Looking-for-sponsor.png",
    "/Looking-for-sponsor-decor.png",
    "/Looking-for-sponsor.png",
    "/Looking-for-sponsor-decor.png",
].map((image, index) => ({
    id: `image-${index}`,
    image
}))

export default function Scroller() {
    return (
      <div className="scroller">
        <Banner images={images} speed={10000} />
      </div>
    );
  }