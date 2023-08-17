import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGanjasAction } from "../../actions/ganjaActions";
import ProductCard from "../../components/ProductCard";
import Spinner from "../../components/Spinner";

const Products = ({
  productsPerPage = 3,
  pagesPerPagination = 4,
  setIsCartOpen,
}) => {
  const ganjaState = useSelector((state) => state.getAllGanjas);
  const { ganjas, loading } = ganjaState;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.round(ganjas?.length / productsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGanjasAction());
  }, [dispatch]);

  const setProductsToPage = () => {
    const startIdx = currentPage * productsPerPage - productsPerPage;
    const endIdx = startIdx + productsPerPage;
    return ganjas?.slice(startIdx, endIdx);
  };

  const setPageButtons = () => {
    const startIdx = Math.floor(
      ((currentPage - 1) / pagesPerPagination) * pagesPerPagination
    );
    return [...Array(pagesPerPagination).keys()].map((_, idx) => {
      return startIdx + idx + 1;
    });
  };

  const changeCurrentPage = (e) => {
    const pageNum = Number(e.target.textContent);
    setCurrentPage(pageNum);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const ganjasNum = ganjas?.length;

  return (
    <section className="products section container">
      <h2 className="section__title">our products</h2>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="products__container">
          {ganjasNum > 0 &&
            setProductsToPage()?.map((ganja) => {
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
      <div className="products__pagination">
        <button className="page__nav-btn" onClick={prevPage}>
          prev
        </button>
        {setPageButtons().map((pageNum, idx) => {
          return (
            <button
              onClick={changeCurrentPage}
              key={idx}
              className={`page__num-btn ${
                currentPage === pageNum
                  ? "page__num-active"
                  : currentPage >= totalPages && "page__num-disabled"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        <button className="page__nav-btn" onClick={nextPage}>
          next
        </button>
      </div>
    </section>
  );
};

export default Products;
