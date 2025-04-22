import { SearchBar } from "./SearchBar";
import RatingFilter from "./RatingFilter";
import GenreFilter from "./GenreFilter";
import YearFilter from "./YearFilter";
import "./Header.css";
function Header({
  movies,
  genres,
  years,
  searchValue,
  setSearchValue,
  setGenreFilterValue,
  setYearFilterValue,
}) {
  return (
    <div className="header-container">
      <h1 className="website-title">Movie Web App</h1>
      <div className="filters-container">
        <div className="search-bar-container">
          <SearchBar
            movies={movies}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="filter-dropdowns-container">
          <GenreFilter
            genres={genres}
            movies={movies}
            setGenreFilterValue={setGenreFilterValue}
          />
          <YearFilter
            years={years}
            movies={movies}
            setYearFilterValue={setYearFilterValue}
          />
          <RatingFilter />
        </div>
      </div>
    </div>
  );
}

export default Header;
