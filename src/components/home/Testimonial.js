import React from "react";
import img1 from "../../assets/images/user-1.png";
import img2 from "../../assets/images/user-2.png";
import img3 from "../../assets/images/user-3.png";
const Testimonial = () => {
  return (
    <>
      <section className="testimonials">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fas fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
              <img src={img1} />
              <h3>Tom Harry</h3>
            </div>
            <div className="col-3">
              <i className="fas fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
              <img src={img2} />
              <h3>John Doe</h3>
            </div>
            <div className="col-3">
              <i className="fas fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
              <img src={img3} />
              <h3>Jane Doe</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
