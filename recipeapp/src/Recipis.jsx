import React from 'react'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Recipies() { 
  let[recipe, setRecipe ]=useState(null) 

  async function fetchRecipis() 
  { 
    let response=await fetch("https://dummyjson.com/recipes",{method:'GET'}) 
    let data=await response.json() 
    setRecipe(data.recipes)

  } 
  useEffect(()=>{ 
    fetchRecipis() 
  },[]) 

  return ( 
    <div className="container mt-3"> 
      <div className="row justify-content-center"> 
        {recipe && recipe.map((recipe) => ( 
          <div className="col-md-3 col-sm-4 mb-4 d-flex justify-content-center" key={recipe.id}> 
            <div className="card shadow-lg border-0 rounded-4" style={{ width: "18rem" }}> 
              <img src={recipe.image} className="card-img-top rounded-top-4" alt={recipe.name} style={{ height: "200px", objectFit: "cover" }}/> 
              <div className="card-body text-center"> 
                <h5 className="card-title text-primary">{recipe.name.slice(0, 15)}</h5> 
                <p className="card-text text-muted">{recipe.ingredients.slice(0, 95)}...</p> 
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View More</Link> 
                </div> 
            </div> 
          </div> 
        ))}    
      </div> 
    </div> 
  );
  

 } 
