// here we define all the application level states and define actions to make the
// changes to the state

export const initialState = {
  basket: [],
};

// Selector

export const getTotalPrice = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const newBasket = state.basket;
      const removeIndex = state.basket.findIndex(
        (item) => item.id === action.id
      );
      if (removeIndex >= 0) {
        newBasket.splice(removeIndex, 1);
      } else {
        console.warn(`Can't find an item with the id of ${action.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
