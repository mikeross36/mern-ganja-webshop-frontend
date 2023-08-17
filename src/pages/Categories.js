import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategoriesAction,
  getCategoryAction,
} from "../actions/categoryActions";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Categories = () => {
  const categoriesState = useSelector((state) => state.getAllCategories);
  const { categories } = categoriesState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [dispatch]);

  return (
    <section className="categories section container">
      <h3 className="section__title">choose our products by category</h3>
      <ul className="categories__wrapper">
        {categories?.map((category) => {
          const {
            _id,
            coverImage,
            name,
            slug,
            origin,
            description,
            cbdToThcRatio,
            effectsOfUse,
            periodOfUse,
          } = category;
          return (
            <li className="category__card" key={_id}>
              <div className="card__image">
                <img
                  src={`/images/categories/${coverImage}`}
                  alt="category pic"
                  className="category__card-img"
                />
              </div>
              <div className="category__card-body">
                <h4 className="category__card-title">
                  {name} <span>({slug})</span>
                </h4>
                <p>Origin: {origin}</p>
                <p>Description: {description}</p>
                <p>Ratio: {cbdToThcRatio}</p>
                <p>Effects: {effectsOfUse}</p>
                <p>To use in: {periodOfUse}</p>
              </div>
              <div className="card__footer">
                <Link
                  to="/category"
                  onClick={() => dispatch(getCategoryAction(_id))}
                >
                  <Button
                    className="button button--xSmall"
                    text={`Products of ${name}`}
                  />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
