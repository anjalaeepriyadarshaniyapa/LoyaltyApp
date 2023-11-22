
const userReducer = (state = {customers: []}, action) => {
    switch (action.type) {
      case 'CREATE_CUSTOMER_SUCCESS':
          return {
              ...state,
              customers: action.payload
          };
      default:
        return state;
    }
  };

  export default userReducer;
