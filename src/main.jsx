import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { About, Cocktail, HomeLayout, Landing, Newsletter } from "./pages";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader,
        errorElement: <h2>Sorry... something went wrong</h2>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
        loader: singleCocktailLoader,
        errorElement: <h2>Sorry... something went wrong</h2>,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        action: newsLetterAction,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={2000} />
    <App />
  </React.StrictMode>
);
