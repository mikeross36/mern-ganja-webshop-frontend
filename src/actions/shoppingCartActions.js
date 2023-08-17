export const addItemToCartAction = (ganja, packing, quantity) => (dispatch) => {
  const cartItem = {
    id: ganja._id,
    name: ganja.name,
    image: ganja.coverImage,
    prices: ganja.prices,
    packing: packing,
    quantity: Number(quantity),
  };
  dispatch({ type: "ADD_ITEM_TO_CART", payload: cartItem });
};

export const removeItemFromCartAction = (ganja) => (dispatch) => {
  dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: ganja });
};

export const increaseQuantAction = (ganja) => (dispatch) => {
  dispatch({ type: "INCREASE_QUANT", payload: ganja });
};

export const decreaseQuantAction = (ganja) => (dispatch) => {
  dispatch({ type: "DECREASE_QUANT", payload: ganja });
};

export const getTotalsAction = () => (dispatch) => {
  dispatch({ type: "GET_TOTALS" });
};

export const clearCartAction = () => (dispatch) => {
  dispatch({ type: "CLEAR_CART" });
};
