import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RatingStars from "../components/RatingStars";

const apiUrl = process.env.REACT_APP_API_URL;

const ReviewsByProduct = () => {
  const ganjaState = useSelector((state) => state.getGanja);
  const { ganja } = ganjaState;

  const [ganjaRating, setGanjaRating] = useState(ganja?.rating);

  const navigate = useNavigate();

  return (
    <section className="reviews section container">
      <button onClick={() => navigate(-1)}>
        <img
          src={`${apiUrl}/images/ganjas/${ganja?.coverImage}`}
          alt={`ganja ${ganja?.name} pic`}
        />
      </button>
      {ganja?.reviews?.length === 0 ? (
        <h3 className="review__title">No users review on {ganja?.name}</h3>
      ) : (
        <>
          <h3 className="review__title">Users reviews on {ganja?.name}</h3>
          <div className="review__container">
            {ganja?.reviews?.map((review) => {
              return (
                <article key={review._id} className="review__card">
                  <div className="review__user-avatar">
                    <img
                      src={
                        // `${apiUrl}/images/users/default.jpg` ||
                        `${apiUrl}/images/users/${review?.user?.photo}`
                      }
                      alt="review users pic"
                    />
                    <h4 className="review__user">{review?.user?.name}</h4>
                  </div>
                  <p className="review__content">{`"${review?.content}"`}</p>
                  <div className="review__rating">
                    <RatingStars
                      value={ganja?.rating}
                      starSize={15}
                      colorInactive="#a9a9a9"
                      colorActive="#FFBA5A"
                      ganjaRating={ganjaRating}
                      setGanjaRating={setGanjaRating}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default ReviewsByProduct;
