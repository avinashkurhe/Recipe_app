import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  async function fetchRecipesById() {
    try {
      let rec = await fetch(`https://dummyjson.com/recipes/${id}`);
      let data = await rec.json();
      setRecipe(data);
    } catch (error) {
      console.error("Error occurred during fetching data:", error);
      setError("Failed to fetch recipe details.");
    }
  }

  useEffect(() => {
    fetchRecipesById();
  }, [id]);

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card product-card">
            <img src={recipe.image} className="card-img-top product-img" alt={recipe.name} />
            <div className="card-body">
              <h3 className="card-title">{recipe.name}</h3>
              <p className="card-text product-description"><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              <p className="card-text product-description"><strong>Instructions:</strong> {recipe.instructions}</p>
              <button className="btn btn-primary back-button" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipesDetails;
