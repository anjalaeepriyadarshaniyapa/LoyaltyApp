

import api from './api';

// export const createUser = (user) => {
//     return {
//       type: 'CREATE_USER',
//       payload: user,
//     };
//   };

  // export const addPoints = (points) => {
  //   return {
  //     type: 'ADD_POINTS',
  //     payload: points,
  //   };
  // };

  // export const redeemPoints = (points) => {
  //   return {
  //     type: 'REDEEM_POINTS',
  //     payload: points,
  //   };
  // };




  // Action Types
  export const CREATE_CUSTOMER_SUCCESS = 'CREATE_CUSTOMER_SUCCESS';
  export const ADD_POINTS_SUCCESS = 'ADD_POINTS_SUCCESS';
  export const REDEEM_POINTS_SUCCESS = 'REDEEM_POINTS_SUCCESS';

  // Action Creators
  export const createCustomerSuccess = (customer) => ({
    type: CREATE_CUSTOMER_SUCCESS,
    payload: customer,
  });

  export const addPointsSuccess = (purchase) => ({
    type: ADD_POINTS_SUCCESS,
    payload: purchase,
  });

  export const redeemPointsSuccess = (message) => ({
    type: REDEEM_POINTS_SUCCESS,
    payload: message,
  });



  // Thunk Actions
export const createUser = (customer) => async (dispatch) => {
  try {
    const response = await api.post('/api/loyalty/createCustomer', {name : customer},
    {
      headers: {
        'Content-Type': 'application/json',
    }
    }

    );
    dispatch(createCustomerSuccess(response.data));
  } catch (error) {
    console.error('Error creating customer:', error);
    // Handle error as needed
  }
};

export const addPoints = (customerId, purchase) => async (dispatch) => {
  try {
    const response = await api.post(`/api/loyalty/addPoints/${customerId}`, {points:purchase});
    dispatch(addPointsSuccess(response.data));
  } catch (error) {
    console.error('Error adding points:', error);
    // Handle error as needed
  }
};

export const getAllCustomers = () => async (dispatch) => {
  try {
    console.log("get all customers is called")
    const response = await api.get(`/api/loyalty/getAllCustomers`);
    dispatch(createCustomerSuccess(response.data));
  } catch (error) {
    console.error('Error adding points:', error);
    // Handle error as needed
  }
};


export const redeemPoints = (customerId, purchase) => async (dispatch) => {
  try {
    const response = await api.post(`/api/loyalty/redeemPoints/${customerId}`, {redeemedPoints:purchase});
    dispatch(redeemPointsSuccess(response.data));
  } catch (error) {
    console.error('Error redeeming points:', error);
    // Handle error as needed
  }
};
