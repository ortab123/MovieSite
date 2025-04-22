import StarRating from "./StarRating";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Movie({ title, imageUrl, genres, id, isGenresLoading, genresError }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // check on first render of the movie component whether this movie is favorited. If yes make the heart icon red
  useEffect(() => {
    const currentFav = JSON.parse(localStorage.getItem("favorites")) || [];
    if (currentFav.includes(id)) {
      setIsFavorite(true);
    }
  }, [id]);
  const toggleFavorite = () => {
    if (!isFavorite) {
      const currentFav = JSON.parse(localStorage.getItem("favorites")) || [];
      console.log(currentFav);
      currentFav.push(id);
      localStorage.setItem("favorites", JSON.stringify(currentFav));
    } else {
      const currentFav = JSON.parse(localStorage.getItem("favorites"));
      console.log(currentFav);
      localStorage.setItem(
        "favorites",
        JSON.stringify(currentFav.filter((favoritedId) => id !== favoritedId))
      );
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
          alt="Movie Poster"
        />
        <div
          className={`favorite-icon ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
      <h2>{title}</h2>
      <p>
        {genresError
          ? genresError
          : isGenresLoading
          ? "loading..."
          : genres.join(", ")}
      </p>
      <StarRating rating={3} />
    </div>
  );
}

export default Movie;
