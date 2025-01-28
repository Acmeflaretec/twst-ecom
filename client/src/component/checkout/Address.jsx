import React, { useState, useEffect } from 'react';
// import AddressForm from './AddressForm';
import axiosInstance from '../../axios';

// const Address = ({ data, dispatch }) => {
const Address = ({ data, dispatch, selected  }) => {
  const [addresses, setAddresses] = useState(data);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    zip: '',
    mobile: '',
    primary: false,
  });

  useEffect(() => {
    setAddresses(data);
  }, [data]);

  const addAddress = async () => {
    try {
      const response = await axiosInstance.post('/address', newAddress);
      setAddresses(response.data.data);
      setShowAddressForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (address) => {
    setNewAddress(address);
    setIsEditing(true);
    setShowAddressForm(true);
  };

  return (
    <div className='py-4'>
      <div className='flex justify-between'>
        <h2 className="text-sm md:text-md font-medium mb-4">Your saved addresses</h2>
        <button onClick={() => {
            setNewAddress({ firstname: '', lastname: '', email: '', address_line_1: '', address_line_2: '', city: '', state: '', zip: '', mobile: '', primary: false });
            setIsEditing(false);
            setShowAddressForm(true);
          }} className="text-blue-400 text-xs md:text-sm px-4">+ Add New Address</button>
      </div>

      {showAddressForm ? (
        <div className="border rounded-lg p-4">
          {/* <AddressForm data={newAddress} dispatch={setNewAddress} isEditing={isEditing} addAddress={addAddress} /> */}
        </div>
      ) : (
        <div className="grid xl:grid-cols-2 gap-4">
          {addresses.map(address => (
            <div key={address._id} className="flex flex-col border p-4 rounded-lg">
              <p className="font-bold">{address.firstname} {address.lastname}</p>
              <p>{address.address_line_1}, {address.address_line_2}</p>
              <p>{address.city}, {address.state}, {address.zip}</p>
              <p>Email: {address.email}</p>
              <p>Phone: {address.mobile}</p>
              <button onClick={() => handleEditClick(address)} className="mt-2 text-blue-500">Edit Address</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Address;
