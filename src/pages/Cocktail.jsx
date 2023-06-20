import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
const singleCocktailURL =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailURL}${id}`);
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];

  let ingredientList = [];
  const ingredients = Object.keys(singleDrink).filter(
    (item) => item.includes("strIngredient") && singleDrink[item] !== null
  );
  for (const ingredient of ingredients) {
    ingredientList.push(singleDrink[ingredient]);
  }
  // iterate over all the array and push all the values for the array
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  return (
    <Wrapper>
      <header>
        <Link to={"/"} className="btn">
          Back to home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">Information: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">Instruction: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Ingredients: </span>
            {ingredientList.toString()}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
