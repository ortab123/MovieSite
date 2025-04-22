import Movie from "./Movie";

//Creating MovieList component.
function MovieList({
  moviesError,
  isMoviesLoading,
  filteredMovies,
  genres,
  isGenresLoading,
  genresError,
}) {
  //if error string is not empty return the error message to the user
  if (moviesError) {
    return <p>{moviesError}</p>;
  }
  //for each movie we return the movie component with each movie as prop
  return (
    <div className="movie-container">
      {isMoviesLoading
        ? "Loading..."
        : filteredMovies.map((movieFromApi) => (
            <Movie
              key={movieFromApi.id}
              title={movieFromApi.title}
              imageUrl={movieFromApi.poster_path}
              id={movieFromApi.id}
              genres={movieFromApi.genre_ids.map(
                (genreId) => genres.find((genre) => genre.id === genreId)?.name
              )}
              isGenresLoading={isGenresLoading}
              genresError={genresError}
            />
          ))}
    </div>
  );
}

// function(genreId) {
//     return genre.find(function(genre){
//         return genre.id === genreID ? genre.name : undefined
//     })
// }
export default MovieList;
