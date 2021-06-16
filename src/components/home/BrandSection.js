import React from "react";
import img1 from "../../assets/images/brand-1.jpg";
import img2 from "../../assets/images/brand-2.jpg";
import img3 from "../../assets/images/brand-3.jpg";
import img4 from "../../assets/images/brand-4.jpg";
import img5 from "../../assets/images/brand-5.jpg";
import img6 from "../../assets/images/brand-3.jpg";

const BrandSection = () => {
  return (
    <>
      <section className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src={img1} alt="brand" />
            </div>
            <div className="col-5">
              <img src={img2} alt="brand" />
            </div>
            <div className="col-5">
              <img src={img3} alt="brand" />
            </div>
            <div className="col-5">
              <img src={img4} alt="brand" />
            </div>
            <div className="col-5">
              <img src={img5} alt="brand" />
            </div>
            <div className="col-5">
              <img src={img6} alt="brand" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSection;
