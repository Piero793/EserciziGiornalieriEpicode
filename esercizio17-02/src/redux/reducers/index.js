const initialState = {
  prefer: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PREFER":
      return {
        ...state,
        prefer: {
          ...state.prefer,
          content: [...state.prefer.content, action.payload],
        },
      };
  }
};

export default mainReducer;
