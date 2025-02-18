const initialState = {
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PREFER":
      console.log(action.payload + "", "aggiunto ai preferiti");
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.content, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
