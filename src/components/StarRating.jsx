import { FaStar } from 'react-icons/fa';

const StarRating = ({rating}) => {
    const stars = Array(5).fill(0)
    return (
      <div className="">
        {stars.map((_, index) => {
          const starValue = index + 1;
  
          return (
            <span
              key={index}
              style={{
                color: starValue <= rating ? "gold" : "grey",
                fontSize: "2rem",
                transition: "color 10000ms",
              }}
            >
              <FaStar />
            </span>
          );
        })}
      </div>
    );
  };

export default StarRating;