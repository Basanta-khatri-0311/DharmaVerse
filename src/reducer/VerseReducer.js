export const initialState = {
  searchQuery: "",
  category: "All",
};

export const verseReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload };

    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};