import { FaStar } from "react-icons/fa";

const RatingStars = ({
  value,
  starSize,
  colorInactive,
  colorActive,
  ganjaRating,
  setGanjaRating,
}) => {
  return (
    <div className="rating__stars">
      {[...Array(5).keys()].map((_, idx) => {
        const ratingValue = idx + 1;
        return (
          <label key={idx}>
            <input
              type="radio"
              name="rating"
              value={value}
              onClick={() => setGanjaRating(ratingValue)}
            />
            <FaStar
              size={starSize}
              className="rating__star"
              color={ratingValue <= ganjaRating ? colorActive : colorInactive}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStars;
