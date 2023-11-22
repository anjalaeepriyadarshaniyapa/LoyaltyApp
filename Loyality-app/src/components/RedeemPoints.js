
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addPoints, redeemPoints} from '../actions';
import './RedeemPoints.css'; // Import the CSS file

const RedeemPoints = () => {
  const dispatch = useDispatch();
  const [pointsToRedeem, setPointsToRedeem] = useState(0);
    const customers = useSelector((state) => state.user.customers)
    const [selectedCustomer, setSelectedCustomer] = useState(0);


    const handleUserSelect = (event) => {
        setSelectedCustomer(event.target.value)
    };
  const handleRedeemPoints = () => {
    dispatch(redeemPoints(selectedCustomer,parseInt(pointsToRedeem, 10)));
  };

  return (
    <div className="redeem-points-container">
      <h2>Redeem Points</h2>
        <select  onChange={handleUserSelect} >
            {customers.map( (e) => <option value={e.id} key={e.id}>{e.name}</option> )}
        </select>
      <div className="input-container">
        <input
          className="input-field"
          type="number"
          placeholder="Enter points to redeem"
          value={pointsToRedeem}
          onChange={(e) => setPointsToRedeem(e.target.value)}
        />
      </div>
      <button className="redeem-button" onClick={handleRedeemPoints}>
        Redeem Points
      </button>
    </div>
  );
};

export default RedeemPoints;
