import React from "react";
import HomeHeroSec from "./HomeHeroSec";
import { useNavigate } from "react-router-dom";
import breakfast from "../Assets/breakfastImg.jpg";
import lunchImg from "../Assets/lunchImg.jpg";
import dinnerImg from "../Assets/dinnerImg.jpg";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  const recCategories = [
    {
      title: "breakfast",
      img: breakfast,
      dec: "The first meal of the day, typically eaten in the morning, fuels your body after an overnight fast. Common options include eggs, toast, cereal, fruits, or smoothies.",
      nav: "/recipes/breakfastlist",
    },
    {
      title: "lunch",
      img: lunchImg,
      dec: "Lunch is the midday meal, often a mix of proteins, vegetables, and carbs to sustain energy. Popular dishes include salads, sandwiches, or rice-based meals.",
      nav: "/recipes/lunchlist",
    },
    {
      title: "dinner",
      img: dinnerImg,
      dec: "Dinner is the evening meal, usually more relaxed and fulfilling. It may include soups, roasted vegetables, pasta, or hearty meals like casseroles, comforting, satisfying.",
      nav: "/recipes/dinnerlist",
    },
  ];
  const handleClick = (item) => {
    navigate(item);
  };
  return (
    <>
      <HomeHeroSec />

      <section
        className="container-fluid d-flex flex-column"
        style={{ minHeight: "100dvh", justifyContent: "space-between" }}
      >
        <div className="row p-2 align-items-center justify-content-center">
          <h2 className=" col-10 col-md-6 shadow text-center p-2 recTypeHeading">
            Pick Your Recipes
          </h2>
        </div>

        <div className="row justify-content-around align-items-center ">
          {recCategories.map((rec, index) => {
            return (
              <div
                className={`col-10 col-md-5 col-lg-3 my-4 category p-2 py-4 rounded shadow`}
                key={index}
                onClick={() => handleClick(rec.nav)}
                style={{ border: "3px dashed #5cb338" }}
              >
                <h3 className="text-capitalize py-2 px-4 rounded-pill cataHeading">
                  {rec.title}
                </h3>
                <div
                  className="p-2 my-2 shadow-lg rounded-circle "
                  style={{ backgroundColor: "#5cb338" }}
                >
                  <div
                    className="rounded-circle overflow-hidden"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img src={rec.img} alt="" style={{ width: "100%" }} />
                  </div>
                </div>
                <p
                  className="text-center text-green my-2 p-2 text-capitalize"
                  style={{ fontWeight: "600" }}
                >
                  {rec.dec}
                </p>
              </div>
            );
          })}
        </div>
        <p
          className="text-center p-4 m-0 rounded"
          style={{
            fontWeight: "600",
            backgroundColor: "#5cb338",
            color: "#fbfffb",
          }}
        >
          Recipes are instructions for preparing a dish, including a list of
          ingredients and a set of steps to follow. They guide you through the
          cooking process, helping to create meals that can range from simple
          snacks to elaborate gourmet dishes. Recipes often include cooking
          techniques, preparation time, and serving suggestions to ensure the
          dish turns out as expected.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Home;
