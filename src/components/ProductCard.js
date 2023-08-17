import { useState } from "react";
import { Link } from "react-router-dom";
import { addItemToCartAction } from "../actions/shoppingCartActions";
import { useDispatch } from "react-redux";
import RatingStars from "./RatingStars";
import Button from "./Button";
import ProductPriceSelect from "../pages/products/ProductPriceSelect";

const apiUrl = process.env.REACT_APP_API_URL;

const ProductCard = ({ ganja, setIsCartOpen }) => {
  const { _id, coverImage, rating, name, category, thc, packings, prices } =
    ganja;
  const [ganjaRating, setGanjaRating] = useState(rating);
  const [packing, setPacking] = useState("one(1)gram");
  const [quantity, setQuantity] = useState(1);

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
    <li className="product__card">
      <div className="product__card-left">
        <p>{name}</p>
        <div className="product__card-image">
          <img
            src={`${apiUrl}/images/ganjas/${coverImage}`}
            className="product__img"
            alt="single ganja pic"
          />
        </div>
        <RatingStars
          value={rating}
          starSize={15}
          colorInactive="#a9a9a9"
          colorActive="#FFBA5A"
          ganjaRating={ganjaRating}
          setGanjaRating={setGanjaRating}
        />
      </div>
      <div className="product__card-right">
        <p>category: {category}</p>
        <p>thc: {thc}%</p>
        <Link to={`/product/${_id}`}>
          <Button className="button button--xSmall" text="details" />
        </Link>
        <ProductPriceSelect
          packing={packing}
          setPacking={setPacking}
          packings={packings}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <h4>
          price: <span>{(prices[0][packing] * quantity).toFixed(2)}</span> €
        </h4>
        <span onClick={() => handleAddItemToCart()}>
          <Button className="button button--xSmall" text="add to cart" />
        </span>
      </div>
    </li>
  );
};

export default ProductCard;
