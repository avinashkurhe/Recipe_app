import Dashbord from './Dashbord'
import Home from './Home.jsx';
import Recipis from './Recipis.jsx'
import RecipiesDetails from './RecipiesDetails.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Contact from './Contact.jsx';
const routes = createBrowserRouter([ 
  { 
    path:'/', 
    element:<Dashbord/>, 
    children:[ 
      { 
        path:'/Home', 
        element:<Home/> 
      },
      { 
        path:'/RecipiesDetails', 
        element:<RecipiesDetails/> 
      }, 
      { 
        path:'/Recipes', 
        element:<Recipis/> 
      }, 
      { 
        path:'/Contact', 
        element:<Contact/> 
      },
      { 
        path:'/recipe/:id', 
        element:<RecipiesDetails/> 
      } 
     
    ] 
  } 
]) 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);


