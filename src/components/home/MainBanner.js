import React from "react";
import img from "../../assets/images/hero-image.png";
const MainBanner = () => {
  return (
    <>
      <div className="hero">
        <div className="row">
          <div className="hero-info">
            <h5 className="timeless">Timeless</h5>
            <h1>Interior Designs</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              consequatur quia ipsam sint voluptatibus assumenda tenetur laborum
              praesentium! Tenetur, repellendus.
            </p>
            <a href="#" className="btn">
              Explore Now
            </a>
          </div>
          <div className="hero-image">
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
