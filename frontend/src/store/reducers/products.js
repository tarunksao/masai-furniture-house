let initialState = {
    productsList: [],
    condition: 0,
    filters: {
      SubCategory:'',
      SalePrice:'',
      Price:'',
      Color:'',
      Material:'',
      Width:0,
      Length:0,
      Height:0,
      Sort:'',
      limit:0
    },
    filteredList: null,
    loading :true,
  };
  
  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case 'PROD_LIST':
        return {
          ...state,
          productsList: action.payload.products,
          condition: action.payload.condition,
          filters: { ...state.filters,...action.payload.condition},
          loading:false,
        };
  
      case 'UPDATE_FILTER':
        console.log('all filters',action.payload.filterObj);
        return {
          ...state,
          filters:{ ...state.filters,...action.payload.filterObj} ,
          filteredList: action.payload.filteredList,
        };
  
      case 'CLEAR_PRODUCTS': {
        return {
          ...state,
          productsList: [],
          filteredList: null,
          condition: null,
          filters: null,
          loading:true,
  
        };
      }
  
      case 'CLEAR_FILTERS': {
        return {
          ...state,
          filteredList: null,
          filters: { ...initialState.filters,...state.condition},
        };
      }
  
      default:
        return state;
    }
  }
