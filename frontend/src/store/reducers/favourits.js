let initialState = {
  favourits: [],
};

export default function favReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        favourits: [action.payload, ...state.favourits],
      };

    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        favourits: state.favourits.filter(i => i.id !== action.payload),
      };
      
      default:
        return state;

  }
}
