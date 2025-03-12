import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS for additional styling

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <div className="container text-center text-white">
            <h1 className="display-4 fw-bold">Welcome to Recipe Manager</h1>
            <p className="lead">
              Discover and share delicious recipes from around the world.
            </p>
            <Link to="/Recipes" className="btn btn-warning btn-lg">
              Explore Recipes
            </Link>
          </div>
        </div>
      </header>

      {/* Recipe Categories */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Popular Recipe Categories</h2>
        <div className="row">
          {/* Category 1 */}
          <div className="col-md-4">
            <div className="card category-card">
              <img
                src="pizza.jpeg"
                className="card-img-top"
                alt="Pizza"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Italian</h5>
                <Link to="/Recipes" className="btn btn-outline-primary">
                  View Recipes
                </Link>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="col-md-4">
            <div className="card category-card">
              <img
                src="https://source.unsplash.com/400x300/?indian,food"
                className="card-img-top"
                alt="Indian Food"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Indian</h5>
                <Link to="/Recipes" className="btn btn-outline-primary">
                  View Recipes
                </Link>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="col-md-4">
            <div className="card category-card">
              <img
                src="https://source.unsplash.com/400x300/?dessert,food"
                className="card-img-top"
                alt="Desserts"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Desserts</h5>
                <Link to="/Recipes" className="btn btn-outline-primary">
                  View Recipes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center text-white py-5">
        <div className="container">
          <h2>Want to Share Your Own Recipe?</h2>
          <p className="lead">Join our community and upload your favorite recipes.</p>
          <Link to="/AddRecipe" className="btn btn-light btn-lg">
            Add Recipe
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
