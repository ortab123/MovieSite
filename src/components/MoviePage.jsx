import { useState, useEffect } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

function MoviePage() {

   //defining a state for movies to keep track of our movies from the api. The value of movies will starts as an empty array. 
   const [movies, setMovies] = useState([])
   const [isMoviesLoading, setIsMoviesLoading] = useState(true)
   const [moviesError, setMoviesError] = useState("")
   const [filteredMovies, setFilteredMovies] = useState([]);

   const [genres, setGenres] = useState([])
   const [isGenresLoading, setIsGenresLoading] = useState(true)
   const [genresError, setGenresError] = useState("")


   //defaine a useEffect to run when component first mounts. Make api call to get movies
   useEffect(() => {
       //define async function to allow us to await api call response 
       async function getMovies(){
          try{
           //wait for response from api
           const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
               {headers: {Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmY3NTdiYjVjZWQzZjE0MWJkMDVkZTlhNzFiM2NhOCIsIm5iZiI6MTU5MjkxNjY1Ny4wODQsInN1YiI6IjVlZjFmYWIxOWE4YThhMDAzNGIxYzZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3YALZSSNJT3c-pQyJZ6h-KDTK9whmh7sPSuP_wdJgc"}} 
           )
           if(response.ok){
               //get json from response
               const data = await response.json()
               //setMovies state to movies from api response
               setMovies(data.results)
               setFilteredMovies(data.results)
               console.log(data)
           }else{
               setMoviesError(`error:${response.status}`)
           }
           }
           catch(err){
               setMoviesError(err.message? err.message : "Somthing went wrong..") 
           }
           setIsMoviesLoading(false)         
       }
       //call async getMovies func
       getMovies()
   }, [] )

   useEffect(() =>{
       async function getGenres() {
           try{
               const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",
                   {headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmY3NTdiYjVjZWQzZjE0MWJkMDVkZTlhNzFiM2NhOCIsIm5iZiI6MTU5MjkxNjY1Ny4wODQsInN1YiI6IjVlZjFmYWIxOWE4YThhMDAzNGIxYzZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3YALZSSNJT3c-pQyJZ6h-KDTK9whmh7sPSuP_wdJgc"}}
               )
           if(response.ok){
               //get json from response
               const data = await response.json()
               //setMovies state to movies from api response
               setGenres(data.genres)
               console.log(data)
           }else{
               setGenresError(`error:${response.status}`)
           }
           }
           catch(err){
               setGenresError(err.message? err.message : "Somthing went wrong..") 
           }
           setIsGenresLoading(false)         
       }
       getGenres()
   }, [])

  return (<>
    <Header movies={movies} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
    <MovieList movies={movies} moviesError={moviesError} isMoviesLoading={isMoviesLoading} genres={genres} filteredMovies={filteredMovies}/> 
    </>);
}

export default MoviePage;