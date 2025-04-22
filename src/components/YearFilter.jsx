const YearFilter = ({ years, setYearFilterValue }) => {
  const handleChange = (event) => {
    setYearFilterValue(event.target.value);
  };
  return (
    <select className="filter-dropdown year-filter" onChange={handleChange}>
      <option value="">Year</option>
      {years?.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};
export default YearFilter;
