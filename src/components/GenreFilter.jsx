const GenreFilter = ({ genres, setGenreFilterValue }) => {
  const handleChange = (event) => {
    setGenreFilterValue(Number(event.target.value));
  };
  return (
    <select className="filter-dropdown genre-filter" onChange={handleChange}>
      <option value="">Genre</option>
      {genres?.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;
