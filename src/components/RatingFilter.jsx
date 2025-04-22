const RatingFilter = () => {
  return (
    <select className="filter-dropdown rating-filter">
      <option value="">Rating</option>
      {[1, 2, 3, 4, 5].map((rating) => (
        <option key={rating} value={rating}>
          {rating}
        </option>
      ))}
    </select>
  );
};

export default RatingFilter;
