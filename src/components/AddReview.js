import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addReviewAction } from "../actions/reviewActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "./Button";
import RatingStars from "./RatingStars";

const addReviewId = "addReviewId";

const AddReview = ({ id, name, rating }) => {
  const [content, setContent] = useState("");
  const [ganjaRating, setGanjaRating] = useState(rating);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!content) {
      toast.error("Review content is mandatory!", { toastId: addReviewId });
      return;
    }
    dispatch(addReviewAction(id, content));
    setContent("");
  };
  return (
    <div className="review">
      <div className="review__title">
        <img src="/images/cannabis-logo-2.svg" alt="form logo" width="40" />
        <h4>
          add your review about <br />
          <button onClick={() => navigate(-1)}>
            <h3>
              <em>{name}</em>
            </h3>
          </button>
        </h4>
      </div>
      <div className="review__form-container">
        <form className="review__form" onSubmit={handleAddReview}>
          <div className="form__control">
            <label htmlFor="content" className="form__label">
              add review
            </label>
            <textarea
              className="form__input"
              id="content"
              rows="5"
              cols="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <span className="review__rating-title">add rating</span>
          <div className="review__rating">
            <RatingStars
              value={rating}
              startSize={15}
              colorInactive="#a9a9a9"
              colorActive="#FFBA5A"
              ganjaRating={ganjaRating}
              setGanjaRating={setGanjaRating}
            />
          </div>
          <Button type="submit" className="button button--small" text="save" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
