import React from "react";
import chiefimg from "../Assets/chief.png";

const HomeHeroSec = () => {
  return (
    <>
      <section className="container-fluid d-lg-none homeBanner-small-screen">
        <div
          className="row overflow-hidden position-relative"
          style={{ minHeight: "100dvh" }}
        >
          <div className="col-12">
            <div className="col-12 mb-4 p-3 bannerCon">
              <h1 className="mb-3  text-uppercase text-delicious">Delicious</h1>
              <h1 className="rounded-pill p-2 px-5 pb-4 m-0 text-recipe">
                Recipe
              </h1>
              <h1 className="mb-3 text-uppercase text-hub">Hub</h1>
            </div>

            <div className="brImgCon">
              <div className="br-con rounded-circle">
                <span className="green-circle rounded-circle shadow"></span>
                <img src={chiefimg} alt="" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid d-none d-lg-block">
        <div className="row overflow-hidden" style={{ minHeight: "100dvh" }}>
          <div className="col-6 bannerLeft">
            <div>
              <div className="mb-4 bannerCon">
                <h1 className="mb-3 text-uppercase text-delicious">
                  Delicious
                </h1>
                <h1 className="rounded-pill p-2 px-5 pb-4 m-0 text-recipe">
                  Recipe
                </h1>
                <h1 className="mb-3 text-uppercase text-hub">Hub</h1>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-6 bannerRight shadow">
            <span className="text text1">Cook with love</span>
            <span className="text text2">serve with passion</span>
            <div className="br-con rounded-circle">
              <span className="rounded-circle shadow"></span>
              <img src={chiefimg} alt="" className="img-fluid " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHeroSec;
