let initialState = {
  //   cartProducts: [{
  //     id:1,
  //     productData:{
  //       Name:"Chair",
  //       Material:"wood",
  //       Price:500,
  //       SalePrice:300,
  //       Width:30,
  //       Length:50,
  //       Image:'https://www.ikea.com/eg/en/images/products/bergmund-chair-black-rommele-dark-blue-white__1007975_pe826608_s5.jpg?f=xxxs',
  //       Quantity:5,
  //       Description:"some text..",
  //     },
  //     PurchasedAmount:1
  //   },
  //   {
  //     id:2,
  //     productData:{
  //       Name:"Table",
  //       Material:"wood",
  //       Price:700,
  //       SalePrice:200,
  //       Width:30,
  //       Length:50,
  //       Image:'https://www.ikea.com/eg/en/images/products/bergmund-chair-black-rommele-dark-blue-white__1007975_pe826608_s5.jpg?f=xxxs',
  //       Quantity:1,
  //       Description:"some text.."
  //     },
  //     PurchasedAmount:1
  //   },
  //   {
  //     id:3,
  //     productData:{
  //       Name:"Bed",
  //       Material:"wood",
  //       Price:500,
  //       SalePrice:300,
  //       Width:30,
  //       Length:50,
  //       Image:'https://www.ikea.com/eg/en/images/products/bergmund-chair-black-rommele-dark-blue-white__1007975_pe826608_s5.jpg?f=xxxs',
  //       Quantity:4,
  //       Description:"some text.."
  //     },
  //     PurchasedAmount:1
  //   },
  //   {
  //     id:4,
  //     productData:{
  //       Name:"Chair",
  //       Material:"wood",
  //       Price:1000,
  //       SalePrice:300,
  //       Width:30,
  //       Length:50,
  //       Image:'https://www.ikea.com/eg/en/images/products/bergmund-chair-black-rommele-dark-blue-white__1007975_pe826608_s5.jpg?f=xxxs',
  //       Quantity:3,
  //       Description:"some text.."
  //     },
  //     PurchasedAmount:1
  //   }
  // ],
  cartProducts: [],
  totalPrice: 0,
  totalAmountOfCartItems: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cartProducts: [action.payload, ...state.cartProducts],
      };
    }

    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(i => i.id !== action.payload),
      };
    }

    case 'CLEAR_CART': {
      return (state = {})
    }

    case 'SET_AMOUNT': {
      state.totalPrice = 0;
      state.totalAmountOfCartItems = 0;
      // eslint-disable-next-line array-callback-return
      state.cartProducts.find((i, index) => {
        if (i.id === action.payload.id) {
          state.cartProducts[index].PurchasedAmount =
            action.payload.PurchasedAmount;
        }

        state.totalPrice +=
          state.cartProducts[index].PurchasedAmount *
          (state.cartProducts[index].productData.Price);

        state.totalAmountOfCartItems +=
          state.cartProducts[index].PurchasedAmount;
      });
      return {
        ...state,
        cartProducts: state.cartProducts,
        totalPrice: state.totalPrice,
        totalAmountOfCartItems: state.totalAmountOfCartItems,
      };
    }
    default:
      return state;
  }
}
