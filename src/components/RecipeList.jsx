import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

const RecipeList = (props) => {
  const { recipeType, title } = props;

  const [searchedItem, setSearchedItem] = useState([]);
  const [query, setQuery] = useState("");
  const [itemNotFound, setItemNotFound] = useState(false);

  const handleQuery = (userInput) => {
    if (userInput) {
      setQuery(userInput);
      const searched = recipeType.filter((res) =>
        res.label.toLowerCase().includes(userInput.toLowerCase())
      );

      if (userInput && searched.length === 0) {
        setItemNotFound(true);
      } else {
        setItemNotFound(false);
        setSearchedItem(searched);
      }
    } else if (!userInput) {
      setSearchedItem([]);
      setQuery(userInput);
    }
  };

  return (
    <div className="recipe-list">
      <div
        className="row align-items-center py-1 shadow"
        style={{
          position: "sticky",
          top: "0%",
          left: "0%",
          backgroundColor: "#fbfffb",
          zIndex: "4",
        }}
      >
        <span className="text-start col-6  m-0 recipe-list-title text-green">
          Recipes ~ {title}
        </span>
        <SearchBar
          handleQuery={handleQuery}
          query={query}
          setQuery={setQuery}
        />
      </div>

      <div className="" style={{ height: "100dvh", overflow: "hidden" }}>
        <div
          className="row justify-content-evenly py-4 recipelistcon"
          style={{
            height: "100%",
            overflowY: "scroll",
            backgroundColor: "rgb(249, 255, 249)",
          }}
        >
          {itemNotFound === true ? (
            <h1>not found</h1>
          ) : (
            <>
              {searchedItem.length !== 0
                ? searchedItem.map((recipe) => (
                    <RecipeCard key={recipe.recipe_id} recipe={recipe} />
                  ))
                : recipeType.map((recipe, index) => (
                    <RecipeCard
                      key={recipe.recipe_id}
                      recipe={recipe}
                      index={index}
                    />
                  ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
