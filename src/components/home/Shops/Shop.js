import React from "react";
import img1 from "../../../assets/images/shop-1.jpg";
import img2 from "../../../assets/images/shop-2.jpg";
import img3 from "../../../assets/images/shop-3.jpg";
import img4 from "../../../assets/images/shop-4.jpg";
import img5 from "../../../assets/images/shop-5.jpg";
import img6 from "../../../assets/images/shop-6.jpg";
import img7 from "../../../assets/images/shop-7.jpg";
import img8 from "../../../assets/images/shop-1.jpg";
import img9 from "../../../assets/images/shop-4.jpg";
import img10 from "../../../assets/images/shop-3.jpg";
import img11 from "../../../assets/images/shop-8.jpg";
import img12 from "../../../assets/images/shop-4.jpg";
import service from "../../../assets/images/service.png";
import returns from "../../../assets/images/returns.png";
import order from "../../../assets/images/order.png";
import delivery from "../../../assets/images/delivery-van.png";

const Shop = () => {
  return (
    <>
      <section>
        <div className="medium-container">
          <div className="row row-2">
            <h2>Shop</h2>
            <select>
              <option>Default</option>
              <option>Sort by Price</option>
              <option>Sort by Quality</option>
              <option>Sort by Sale</option>
              <option>Sort by Popularity</option>
            </select>
          </div>
          <div className="row">
            <div className="col-4">
              <a href="shop/rubber-plant.html">
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
              <a href="shop/tea-kettle.html">
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
              <a href="shop/desk-decor.html">
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
              <a href="shop/wall-paint.html">
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
              <a href="shop/comfy-chair.html">
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
              <a href="shop/book-holder.html">
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
              <a href="shop/soft-glow.html">
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
              <a href="shop/wall-art.html">
                <img src={img8} />
                <h4>Wall Art</h4>
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
              <a href="shop/rubber-plant.html">
                <img src={img9} />
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
              <a href="shop/comfy-chair.html">
                <img src={img10} />
                <h4>Comfy Chair</h4>
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
              <a href="shop/desk-decor.html">
                <img src={img11} />
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
              <a href="shop/soft-glow.html">
                <img src={img12} />
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
          </div>
          <div className="pagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>&#8594;</span>
          </div>
        </div>
      </section>

      {/* <!-- ASSURANCE SECTION --> */}
      <section className="assurance">
        <div className="small-container">
          <div className="row">
            <div className="col-4">
              <img src={service} alt="24 hours service" />
              <p>24H Service</p>
            </div>
            <div className="col-4">
              <img src={returns} alt="free returns" />
              <p>Free Returns</p>
            </div>
            <div className="col-4">
              <img src={order} alt="order tracking" />
              <p>Order Tracking</p>
            </div>
            <div className="col-4">
              <img src={delivery} alt="fast delivery" />
              <p>Fast Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
