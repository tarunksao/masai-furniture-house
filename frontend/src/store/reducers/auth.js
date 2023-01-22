const initial = {
  id: '',
  user: {
    Address: '',
    Email: '',
    FirstName: '',
    LastName: '',
    Password: '',
    PhoneNum: '',
    BirthDate: '',
    Gender: '',
    PrefferedStore: '',
    Locations: '',
  },
};

export default function authReducer(state = initial, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
        id: action.payload.id,
      };
    case 'CLEAR_USER':
      return (state = {});
    default:
      return state;
  }
}
