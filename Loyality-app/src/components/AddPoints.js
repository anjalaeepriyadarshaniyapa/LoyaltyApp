
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPoints } from '../actions';
import './AddPoints.css'; // Import the CSS file

const AddPoints = () => {
  const dispatch = useDispatch();
  const [pointsToAdd, setPointsToAdd] = useState(0);
    const customers = useSelector((state) => state.user.customers)
    const [selectedCustomer, setSelectedCustomer] = useState(0);



  const handleAddPoints = () => {
    dispatch(addPoints(selectedCustomer,parseInt(pointsToAdd, 10)));
  };

    const handleUserSelect = (event) => {
        setSelectedCustomer(event.target.value)
    };


    let selectedOption = ""

  return (
    <div className="add-points-container">
      <h2>Add Points</h2>
      <div className="input-container">
          <select value={selectedOption} onChange={handleUserSelect} >
              {customers.map( (e) => <option value={e.id} key={e.id}>{e.name}</option> )}
          </select>
        <input
          className="input-field"
          type="number"
          placeholder="Enter points to add"
          value={pointsToAdd}
          onChange={(e) => setPointsToAdd(e.target.value)}
        />
      </div>
      <button className="add-button" onClick={handleAddPoints}>
        Add Points
      </button>
    </div>
  );
};

export default AddPoints;
