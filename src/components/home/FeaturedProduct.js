import React from "react";
import img1 from "../../assets/images/featured-1.jpg";
import img2 from "../../assets/images/featured-2.jpg";
import img3 from "../../assets/images/featured-3.jpg";
import img4 from "../../assets/images/featured-4.jpg";
const FeaturedProduct = () => {
  return (
    <>
      <section className="featured">
        <h2 className="title">Featured Products</h2>
        <div className="medium-container">
          <div className="row">
            <div className="col-4">
              <img src={img1} />
              <h4>Chair Paded Seat</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>$15</p>
            </div>
            <div className="col-4">
              <img src={img2} />
              <h4>Chelvee Clock</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
              <p>$15</p>
            </div>
            <div className="col-4">
              <img src={img3} />
              <h4>Casper Chair</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>$15</p>
            </div>
            <div className="col-4">
              <img src={img4} />
              <h4>Aqua Lamp</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>$15</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
