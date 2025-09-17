import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="ocean">
        <div className="wave" />
        <div className="wave" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h1 className="h1-large">
                Gemdev is a free HTML template designed for your web products
              </h1>
              <p className="p-large">
                Use Gemdev to create awesome websites for your products,
                services and ideas in a short amount of time
              </p>
              <a className="btn-solid-lg page-scroll" href="#statement">
                Discover
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container">
              <img
                className="img-fluid"
                src="src/assets/header-gem.svg"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
