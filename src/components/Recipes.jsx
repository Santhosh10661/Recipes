import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import BreakfastList from "./BreakfastList";
import LunchList from "./LunchList";
import DinnerList from "./DinnerList";
import Favorites from "./Favorites";

const Recipes = () => {
  return (
    <section className="container-fluid position-relative">
      <nav className="row justify-content-between align-items-center p-1 recipesNav">
        <div style={{ width: "fit-content" }}>
          <NavLink to="/">
            <i className="bi bi-house-door-fill fs-5"></i>
          </NavLink>
        </div>
        <ul
          className="col-8 col-md-6 d-flex justify-content-around m-0 m-2"
          style={{ listStyle: "none" }}
        >
          <li>
            <NavLink to="/recipes/breakfastlist">breakfast</NavLink>
          </li>
          <li>
            <NavLink to="/recipes/lunchlist">lunch</NavLink>
          </li>
          <li>
            <NavLink to="/recipes/dinnerlist">dinner</NavLink>
          </li>
        </ul>
        <div style={{ width: "fit-content" }}>
          <NavLink to="/recipes/favorites">
            {/* <i className="bi bi-bookmark-heart-fill"></i> */}
            <i className="bi bi-balloon-heart-fill fs-5"></i>
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/breakfastlist" element={<BreakfastList />} />
        <Route path="/lunchlist" element={<LunchList />} />
        <Route path="/dinnerlist" element={<DinnerList />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </section>
  );
};
export default Recipes;
