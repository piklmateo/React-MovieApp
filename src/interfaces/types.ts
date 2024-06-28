export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  original_language: string;
  original_title: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface RatedMovie {
  id: string;
  movieId: number;
  movieTitle: string;
  movieOverview: string;
  movieImg: string;
  rating: string;
}
