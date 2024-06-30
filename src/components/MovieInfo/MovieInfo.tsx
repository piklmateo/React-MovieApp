import { useEffect, useState } from "react";
import { Movie } from "../../interfaces/types";
import { useParams, redirect, useNavigate } from "react-router-dom";
import { fetchMovieInfo } from "../../hooks/MovieHooks";
import "./MovieInfo.css";
import { handleAddRatedMovie } from "../../hooks/RatedMovieHooks";

const MovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState<Movie>();
  const [rating, setRating] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInfo = async () => {
      if (id) {
        setMovieInfo(await fetchMovieInfo(id));
      }
    };
    fetchInfo();
  }, [id]);

  if (!movieInfo) {
    return <div>Loading...</div>;
  }

  const addRatedMovie = async () => {
    await handleAddRatedMovie(
      movieInfo.id,
      movieInfo.title,
      movieInfo.overview,
      movieInfo.poster_path,
      rating
    );
    navigate("/");
  };

  return (
    <div className="movie-info-container">
      <img
        className="movie-info-img"
        src={"https://image.tmdb.org/t/p/original/" + movieInfo.poster_path}
        alt={movieInfo.title}
      />
      <div className="movie-info-content">
        <h1>{movieInfo.title}</h1>
        <div>
          <h2>Release date</h2>
          <p>{movieInfo.release_date.slice(0, 4)}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
        </div>
        <h2>My rating</h2>
        <div className="rating-container-movie-page">
          <input
            type="text"
            name="rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <p>/ 10</p>
        </div>
        <button onClick={addRatedMovie} className="btn-rating">
          Add rating
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
