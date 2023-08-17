const ProductPriceSelect = ({
  packing,
  setPacking,
  packings,
  quantity,
  setQuantity,
}) => {
  return (
    <div className="product__price">
      <div className="product__packing">
        <select
          className="form__select"
          name="packing"
          value={packing}
          onChange={(e) => setPacking(e.target.value)}
        >
          {packings?.map((packing, idx) => {
            return (
              <option value={packing} key={idx}>
                {packing}
              </option>
            );
          })}
        </select>
      </div>
      <div className="product__quantity">
        <select
          className="form__select"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {[...Array(10).keys()].map((_, idx) => {
            return (
              <option value={idx + 1} key={idx}>
                {idx + 1}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ProductPriceSelect;
