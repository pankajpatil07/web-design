import React from "react";
import img1 from "../../assets/images/category-1.jpg";
import img2 from "../../assets/images/category-2.jpg";
import img3 from "../../assets/images/category-3.jpg";
const ProductCategory = () => {
  return (
    <>
      <section className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={img1} />
            </div>
            <div className="col-3">
              <img src={img2} />
            </div>
            <div className="col-3">
              <img src={img3} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
