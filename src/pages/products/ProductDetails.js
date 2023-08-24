import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGanjaDetails } from "../../hooks/useGanjaDetails";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { getGanjaAction } from "../../actions/ganjaActions";
import { addItemToCartAction } from "../../actions/shoppingCartActions";

import RatingStars from "../../components/RatingStars";
import Button from "../../components/Button";
import ProductPriceSelect from "./ProductPriceSelect";
import AddReview from "../../components/AddReview";

const apiUrl = process.env.REACT_APP_API_URL;

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const ProductDetails = ({ setShowModal1, setIsCartOpen }) => {
  const ganja = useGanjaDetails();

  const {
    _id,
    name,
    coverImage,
    category,
    dateTested,
    thca,
    thc,
    cbda,
    cbd,
    summary,
    packings,
    rating,
    prices,
  } = ganja;

  const [ganjaRating, setGanjaRating] = useState(rating);
  const [packing, setPacking] = useState("one(1)gram");
  const [quantity, setQuantity] = useState(1);

  const currentUser = useCurrentUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    dispatch(addItemToCartAction(ganja, packing, quantity));
    const timer = setTimeout(() => {
      setIsCartOpen(true);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <section className="product section container">
      <header className="product__header">
        <h3 className="product__name">{name}</h3>
      </header>
      <button className="product__image" onClick={() => navigate(-1)}>
        <img
          src={`${apiUrl}/images/ganjas/${coverImage}`}
          alt={`ganja ${name}`}
        />
      </button>
      <article className="product__details">
        <img
          src="/images/thc-symbol.jpg"
          alt=""
          className="thc-symbol"
          style={{ width: "50px" }}
        />
        <p>category: {category}</p>
        <p>tested: {formatDate(dateTested)}</p>
        <p>thca: {thca}</p>
        <p>thc: {thc}</p>
        <p>cbda: {cbda}</p>
        <p>cbd: {cbd}</p>
        <div className="product__rating">
          <p>rating:</p>
          <RatingStars
            value={rating}
            starSize={15}
            colorInactive="#a9a9a9"
            colorActive="#FFBA5A"
            ganjaRating={ganjaRating}
            setGanjaRating={setGanjaRating}
          />
        </div>
        <p className="product__summary">
          <em>{summary}</em>
        </p>
        <Link
          to="/reviews-by-product"
          onClick={() => dispatch(getGanjaAction(_id))}
        >
          <Button className="button button--xSmall" text="reviews" />
        </Link>
        <p>price by packing size:</p>
        <div className="product__details-price">
          <ProductPriceSelect
            packing={packing}
            setPacking={setPacking}
            packings={packings}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <div className="product__details-packing-price">
            <h4>{(prices[0][packing] * quantity).toFixed(2)} €</h4>
          </div>
        </div>
        <div className="product__card-button" onClick={handleAddItemToCart}>
          <Button className="button button--xSmall" text="add to cart" />
        </div>
        {!currentUser ? (
          <div className="product__login" onClick={() => setShowModal1(true)}>
            <Button
              className="button button--xSmall"
              text="login to add review"
            />
          </div>
        ) : (
          <AddReview id={_id} name={name} rating={rating} />
        )}
      </article>
    </section>
  );
};

export default ProductDetails;
