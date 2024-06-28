import "./MovieGallery.css";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { Movie } from "../../interfaces/types";
import Search from "../../assets/search.svg";
import { fetchMovies, fetchSearchedMovies } from "../../hooks/MovieHooks";

const MovieGallery = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery === "") {
        setMovies(await fetchMovies());
      } else {
        setMovies(await fetchSearchedMovies(searchQuery));
      }
    };

    fetchData();
  }, [searchQuery]);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-gallery-container">
      <div className="search-container">
        <input
          className="search"
          type="text"
          name="search"
          id="search"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img
          className="search-icon"
          src={Search}
          alt="search-icon"
          width={20}
          height={20}
        />
      </div>
      <div className="gallery-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
