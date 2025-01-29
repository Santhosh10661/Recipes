import React from "react";
const Footer = () => {
  return (
    <footer className="py-2 px-4 shadow-lg container-fluid ">
      <div className="row bg-green rounded justify-content-around align-items-end p-4">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
          <p
            className="m-0"
            style={{
              width: "fit-content",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Built By Santhosh-kannan
          </p>
          <div
            className="p-2 d-flex"
            style={{
              width: "fit-content",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            <p className="m-0 mb-1 mx-2">Follow us on</p>
            <div
              className="d-flex flex-row justify-content-around"
              style={{ borderBottom: "2px dashed #fbfffb" }}
            >
              <i className="mx-1 bi bi-linkedin"></i>
              <i className="mx-1 bi bi-facebook"></i>
              <i className="mx-1 bi bi-twitter-x"></i>
              <i className="mx-1 bi bi-instagram"></i>
            </div>
          </div>
        </div>
        <p
          className="col-12"
          style={{ width: "fit-content", fontSize: "14px", fontWeight: "600" }}
        >
          © 2025 RecipeApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
