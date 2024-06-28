import "./MovieCard.css";
import { useState } from "react";
import { Movie } from "../../interfaces/types";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const shortenOverview = movie.overview.substring(0, 150);

  return (
    <div className="card-container">
      <img
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="card-image"
        src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
        alt="img"
      />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={isHovered ? "card-info" : "card-info hidden"}
      >
        <h2>{movie.title}</h2>
        <p>{shortenOverview + "..."}</p>
        <Link className="more-link" to={"/movie/" + movie.id}>
          More...
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
