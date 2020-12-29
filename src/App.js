import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "6f34548d";
  const APP_KEY = "22eaf07d0bd6a4acf2a491f098b643cb";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App" onSubmit={getSearch}>
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for a food ... (ex: chicken)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-buttom" type="submit">
          Search
        </button>
      </form>
      <div className="content">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={recipe.recipe.label}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
