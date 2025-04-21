import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function Header({movies, setFilteredMovies}) {
const [results, setResults] = useState([])
  return (<div>
    <h1 className="website-title">Movie Web App</h1>
    <div className="search-bar-container">
      <SearchBar setResults={setResults} movies={movies} setFilteredMovies={setFilteredMovies} />
      <SearchResultsList results={results} />
    </div>
    </div>);
}

export default Header;