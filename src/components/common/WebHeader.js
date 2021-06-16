import React from "react";

const header = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <a className="logo" href="#">
            Deep Jyoti
          </a>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-user"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="qodef-wishlist-heart-svg"
              x="0px"
              y="0px"
              width="17.5px"
              height="15.542px"
              viewBox="1.075 1.364 17.5 15.542"
            >
              <path
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.674,3.385	c-1.644-1.644-4.309-1.644-5.953,0c-0.001,0-0.001,0-0.001,0L9.907,4.198l-0.81-0.813c-1.645-1.644-4.313-1.644-5.956,0	c-1.645,1.644-1.645,4.312,0,5.957l0.812,0.81l5.954,5.956l5.956-5.956l0.811-0.81c1.644-1.645,1.646-4.311,0.002-5.955	C16.676,3.387,16.676,3.386,16.674,3.385z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="qodef-dropdown-cart-svg"
              width="19.816"
              height="18"
              viewBox="51.878 -0.952 19.816 18"
            >
              <g
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M57.33-.197L54.843 3.12v11.61c0 .916.742 1.658 1.659 1.658h11.609c.917 0 1.659-.742 1.659-1.658V3.12L67.283-.197H57.33zM54.843 3.12h14.928M65.624 6.438a3.317 3.317 0 11-6.634 0"></path>
              </g>
            </svg>
          </div>
          <div className="menu-toggle">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
