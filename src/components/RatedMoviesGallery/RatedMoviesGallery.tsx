import { useEffect, useState } from "react";
import { RatedMovie } from "../../interfaces/types";
import {
  fetchRatedMovies,
  removeRatedMovie,
} from "../../hooks/RatedMovieHooks";
import close from "../../assets/close.svg";
import "./RatedMoviesGallery.css";

const RatedMoviesGallery = () => {
  const [movies, setMovies] = useState<RatedMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies(await fetchRatedMovies());
    };
    fetchMovies();
  }, []);

  const handleRemoveRatedMovie = async (id: string) => {
    await removeRatedMovie(id);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const getRatingClass = (rating: string) => {
    const parsedRating = parseFloat(rating);
    if (parsedRating >= 7.5) {
      return "green-rating";
    } else if (parsedRating >= 5) {
      return "yellow-rating";
    } else {
      return "red-rating";
    }
  };

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-gallery-container">
      <div className="gallery-grid">
        {movies.map((movie) => (
          <div className="card-container" key={movie.id}>
            <img
              className="card-image"
              src={"https://image.tmdb.org/t/p/original/" + movie.movieImg}
              alt={movie.movieTitle}
            />
            <div className="close-container">
              <div
                onClick={() => handleRemoveRatedMovie(movie.id)}
                className="close-button"
              >
                <img src={close} alt="close-svg" width={30} height={30} />
              </div>
            </div>
            <div className="card-info">
              <h3>{movie.movieTitle}</h3>
              <p>{movie.movieOverview.substring(0, 150) + "..."} </p>
              <div className="rating-flex-container">
                <div
                  className={`rating-container ${getRatingClass(movie.rating)}`}
                >
                  <p>{movie.rating + " / 10"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatedMoviesGallery;
