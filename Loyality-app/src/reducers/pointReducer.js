
const pointReducer = (state = 0 , action) => {
    switch (action.type) {
      case 'REDEEM_POINTS':
        return state - action.payload;
      default:
        return state;
    }
  };

  export default pointReducer;
