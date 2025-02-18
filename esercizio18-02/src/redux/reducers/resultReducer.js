const initialState = {
  content: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default resultReducer;
