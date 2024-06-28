const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const fetchMovies = async () => {
  try {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      },
    });

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("error: ", error);
  }
};

export const fetchSearchedMovies = async (searchQuery: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        },
      }
    );

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const fetchMovieInfo = async (id: string) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
};
