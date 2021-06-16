import React from "react";
import img from '../../assets/images/single.png'
const OfferSection = () => {
  return (
    <>
      <section className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={img} />
            </div>
            <div className="col-2">
              <h3>Cabinet</h3>
              <small>$175.00</small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                repudiandae ea deserunt qui quos voluptatem doloribus!
              </p>
              <a href="#" className="btn">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferSection;
