import React from "react";

import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.subtitle}>Calories: {calories.toFixed(2)}</p>
      <div className={style.recipeContent}>
        <img className={style.image} src={image} alt="" />
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
