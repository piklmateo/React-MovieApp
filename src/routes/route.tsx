import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MoviePage from "../pages/MoviePage";
import RatedMoviesPage from "../pages/RatedMoviesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/rated-movies",
        element: <RatedMoviesPage />,
      },
    ],
  },
]);
