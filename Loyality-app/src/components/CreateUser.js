
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getAllCustomers } from '../actions';
import './CreateUser.css'; // Import the CSS file

const CreateUser = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
    const [userArray, setuserArray] = useState('');
    const customers = useSelector((state) => state.user.customers)

  const handleCreateUser = () => {
    dispatch(createUser(userName));
  };

    useEffect(() => {
        dispatch(getAllCustomers())
    } , [dispatch])

    useEffect(() => {
        let array = [];
        for(let i = 0; i < customers.length; i++) {
            array.push(
                <p key={i}  >{customers[i].name}</p>
            );
        }
        setuserArray(array)
    }, [customers])

  return (
    <div className="create-user-container">
      <h2>Create User</h2>
        <h3> Available customers</h3>
        <div>
            {userArray}
        </div>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Enter username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <button className="create-button" onClick={handleCreateUser}>
        Create User
      </button>
    </div>
  );
};

export default CreateUser;
