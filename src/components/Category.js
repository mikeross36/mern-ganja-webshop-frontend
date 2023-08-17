import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const Category = ({ setIsCartOpen }) => {
  const categoryState = useSelector((state) => state.getCategory);
  const { category, loading } = categoryState;

  return (
    <section className="category__products section container">
      <h3 className="section__title">products by category {category.name}</h3>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="category__products-container">
          {category?.ganjas?.map((ganja) => {
            return (
              <ProductCard
                key={ganja._id}
                ganja={ganja}
                setIsCartOpen={setIsCartOpen}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Category;
