import React from "react";
import img1 from "../../assets/images/shop-1.jpg";
import img2 from "../../assets/images/shop-2.jpg";
import img3 from "../../assets/images/shop-3.jpg";
import img4 from "../../assets/images/shop-4.jpg";
import img5 from "../../assets/images/shop-5.jpg";
import img6 from "../../assets/images/shop-6.jpg";
import img7 from "../../assets/images/shop-7.jpg";
import img8 from "../../assets/images/shop-8.jpg";
const LatestProduct = () => {
  return (
    <>
      <section className="latest-products">
        <small>Latest Collection</small>
        <h2 className="title">ESSENTIAL PRODUCTS</h2>
        <div className="medium-container">
          <div className="row">
            <div className="col-4">
              <a href="#">
                <img src={img1} />
                <h4>Rubber Plant</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>$15</p>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <img src={img2} />
                <h4>Tea Kettle</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>$15</p>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <img src={img3} />
                <h4>Desk Decor</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>$15</p>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <img src={img4} />
                <h4>Wall Paint</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>$15</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <a href="#">
                <img src={img5} />
                <h4>Comfy Chair</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>$15</p>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <img src={img6} />
                <h4>Book Holder</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>$15</p>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <img src={img7} />
                <h4>Soft Glow</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>$15</p>
              </a>
            </div>
            <div className="col-4">
              <a href="#">
                <img src={img8} />
                <h4>Wall Art</h4>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </a>
              <p>$15</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestProduct;
