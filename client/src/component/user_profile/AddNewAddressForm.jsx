import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import { validationSchema } from "../../schema/AddressSchema";

const AddNewAddressForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", { ...values, contactNumber: phoneNumber });
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className="">
      <div className="">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Address
        </h2>
        <form onSubmit={formik.handleSubmit}>
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={`w-full px-3 py-3 border ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className={`w-full px-3 py-3 border ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={`w-full px-3 py-3 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password, Confirm Password, and Contact Number */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="New Password"
                className={`w-full px-3 py-3 border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm New Password"
                className={`w-full px-3 py-3 border ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium mb-1"
              >
                Contact Number*
              </label>
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="IN"
                value={phoneNumber}
                onChange={(value) => {
                  setPhoneNumber(value);
                  formik.setFieldValue("contactNumber", value);
                }}
                className={`w-full px-2 py-1 border ${
                  formik.touched.contactNumber && formik.errors.contactNumber
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {formik.touched.contactNumber && formik.errors.contactNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.contactNumber}
                </p>
              )}
            </div>
          </div>

          {/* Mark as Default Address */}
          <div className="flex items-center mt-6">
            <input type="checkbox" id="default-address" className="mr-2" />
            <label htmlFor="default-address" className="text-sm">
              Mark as Default Address
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center mt-6 w-full">
            <button
              type="button"
              className="px-6 py-3 w-full lg:w-auto border border-black text-gray-700 hover:bg-gray-200 focus:outline-none mb-4 lg:mb-0 lg:mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 w-full lg:w-auto border border-black text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewAddressForm;
