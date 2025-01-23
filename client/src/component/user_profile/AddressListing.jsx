import React, { useState } from "react";

const initialAddresses = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobile: "+1234567890",
    isDefault: false, // Added isDefault property
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    mobile: "+0987654321",
    isDefault: false, // Added isDefault property
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    mobile: "+1122334455",
    isDefault: false, // Added isDefault property
  },
];

const AddressCard = ({ address, onToggleDefault }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-xl">
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        {address.firstName} {address.lastName}
      </h3>
      <p className="text-gray-600 text-lg mb-1">
        <span className="font-medium text-gray-800">Email:</span> {address.email}
      </p>
      <p className="text-gray-600 text-lg mb-1">
        <span className="font-medium text-gray-800">Mobile:</span> {address.mobile}
      </p>
    </div>
    <div className="bg-gray-100 p-4 mt-4 flex items-center">
      <label className="flex items-center text-sm font-medium text-gray-700 mr-4">
        <input
          type="checkbox"
          checked={address.isDefault}
          onChange={() => onToggleDefault(address.id)}
          className="h-4 w-4 text-blue-500 border-gray-300 rounded"
        />
        <span className="ml-2">Mark as Default</span>
      </label>
    </div>
  </div>
);

const AddressListing = () => {
  const [addresses, setAddresses] = useState(initialAddresses);

  const handleToggleDefault = (id) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === id
          ? { ...address, isDefault: !address.isDefault }
          : address
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Address Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onToggleDefault={handleToggleDefault}
          />
        ))}
      </div>
    </div>
  );
};

export default AddressListing;
