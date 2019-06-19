import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "56a04512";
  const APP_KEY = "917c3e9484c98349029f3879ead85e22";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();

  }, [query]);
// by adding ', []' to the line above, we keep our effect from running each time. It now only runs 
// once when the page initially loads

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  // we tell it to "await" because we don't know how long it will take to get the data back from the API.
  // Always use "await" with a "Promise"...this was a promise.



  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };


  return(
    <div className = "App">
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" type="text" value = {search} onChange = {updateSearch}/>
        <button className = "search-button" type = "submit">
          Search for Recipes
        </button>
      </form>

      <div className = "recipes">
      {recipes.map(recipe => (
        <Recipe 
          key = {recipe.recipe.label}
          source = {recipe.recipe.source}
          title = {recipe.recipe.label} 
          calories = {recipe.recipe.calories} 
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          link = {recipe.recipe.shareAs}
          serves = {recipe.recipe.yield}          
        />
      ))}
      </div>
    </div>
  );
};

export default App;
