import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({title, calories, image, ingredients, source, link, serves}) => {
var intCals = Math.trunc(calories, 10);

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2>From: {source}</h2>
            <a href = {link} target = "_blank">Full details:</a>
            <p>Serves {serves}</p>
            <ol>
                <strong>Ingredients:</strong>            
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {intCals}</p>
            <img className = {style.image} src = {image} alt = ""/>
        </div>
    );
};

export default Recipe;