const JSON_SERVER_API = import.meta.env.VITE_JSON_SERVER_API;

export const fetchRatedMovies = async () => {
  try {
    const res = await fetch(JSON_SERVER_API, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const removeRatedMovie = async (id: string) => {
  try {
    const res = await fetch(`${JSON_SERVER_API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res.ok) {
      alert("Error");
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const handleAddRatedMovie = async (
  movieId: number,
  movieTitle: string,
  movieOverview: string,
  movieImg: string,
  rating: string
) => {
  try {
    const ratedMovie = {
      movieId: movieId,
      movieTitle: movieTitle,
      movieOverview: movieOverview,
      movieImg: movieImg,
      rating: rating,
    };

    const res = await fetch(JSON_SERVER_API, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(ratedMovie),
    });

    if (!res.ok) {
      alert("Error while adding movie...");
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};
