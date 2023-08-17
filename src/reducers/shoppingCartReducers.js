const initialState = {
  cartItems: [],
  cartTotal: 0,
  itemsTotal: 0,
};

const addItemToCart = (state, action) => {
  const cartItemsCopy = [...state.cartItems];
  const currItemIdx = cartItemsCopy.findIndex((item) => {
    return item.id === action.payload.id;
  });
  if (currItemIdx < 0) {
    cartItemsCopy.push({ ...action.payload });
  } else {
    const currItemCopy = cartItemsCopy[currItemIdx];
    currItemCopy.quantity++;
    cartItemsCopy[currItemIdx] = currItemCopy;
  }
  return { ...state, cartItems: cartItemsCopy };
};

const removeItemFromCart = (state, action) => {
  let cartItemsCopyDel = [...state.cartItems];
  cartItemsCopyDel = cartItemsCopyDel.filter((item) => {
    return item.id !== action.payload.id;
  });
  return { ...state, cartItems: cartItemsCopyDel };
};

const increaseQuant = (state, action) => {
  let cartItemsCopyInc = [...state.cartItems];
  const incItemQuant = cartItemsCopyInc.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  cartItemsCopyInc = incItemQuant;
  return { ...state, cartItems: cartItemsCopyInc };
};

const decreaseQuant = (state, action) => {
  let cartItemsCopyDec = [...state.cartItems];
  const decItemQuant = cartItemsCopyDec
    .map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity !== 0);
  cartItemsCopyDec = decItemQuant;
  return { ...state, cartItems: cartItemsCopyDec };
};

const getTotals = (state) => {
  let { cartTotal, itemsTotal } = state.cartItems.reduce(
    (acc, item) => {
      const cartItemTotal = item.prices[0][item.packing] * item.quantity;
      acc.cartTotal += cartItemTotal;
      acc.itemsTotal += item.quantity;
      return acc;
    },
    { cartTotal: 0, itemsTotal: 0 }
  );
  cartTotal = Number(cartTotal);
  return { ...state, cartTotal, itemsTotal };
};

const clearCart = (state) => {
  return { ...state, cartItems: [] };
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return addItemToCart(state, action);
    case "REMOVE_ITEM_FROM_CART":
      return removeItemFromCart(state, action);
    case "INCREASE_QUANT":
      return increaseQuant(state, action);
    case "DECREASE_QUANT":
      return decreaseQuant(state, action);
    case "GET_TOTALS":
      return getTotals(state);
    case "CLEAR_CART":
      return clearCart(state);
    default:
      return state;
  }
};
