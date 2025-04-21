import StarRating from "./StarRating";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Movie({title, imageUrl, genres, id}){
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        if(!isFavorite){
            const currentFav = JSON.parse(localStorage.getItem("favorites")) || []
            console.log(currentFav)
            currentFav.push(id)
            localStorage.setItem("favorites", JSON.stringify(currentFav))
        }else{
            const currentFav = JSON.parse(localStorage.getItem("favorites"))
            console.log(currentFav)
            localStorage.setItem("favorites", JSON.stringify(currentFav.filter(favoritedId => id !== favoritedId)))
        }
        setIsFavorite(!isFavorite);
      };

    return(
    <div className="movie-card">   
         <div className="poster-wrapper">
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${imageUrl}`} alt="Movie Poster"/>
            <div className={`favorite-icon ${isFavorite ? "active": ""}`}
            onClick={toggleFavorite}>
                {isFavorite ? <FaHeart/> : <FaRegHeart/>}
            </div>
        </div>
        <h2>{title}</h2>
        <p>{genres.join(', ')}</p>
        <StarRating rating={3}/>
    </div>
    );
}

export default Movie;