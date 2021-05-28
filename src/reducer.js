export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Find the first match and returns it back
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //copy the basket with the new state into a temporary variable
      let newBasket = [...state.basket];
      //Checks for any items in the basket and remove it by 1
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      //Returns the new current state of the basket.
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
