import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Category = ({ setIsCartOpen }) => {
  const categoryState = useSelector((state) => state.getCategory);
  const { category } = categoryState;

  return (
    <section className="category__products section container">
      <h3 className="section__title">products by category {category.name}</h3>
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
    </section>
  );
};

export default Category;
