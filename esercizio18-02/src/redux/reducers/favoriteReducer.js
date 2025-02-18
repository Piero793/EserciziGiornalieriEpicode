const initialState = {
  content: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    default:
      return state;
  }
};

export default favoriteReducer;
