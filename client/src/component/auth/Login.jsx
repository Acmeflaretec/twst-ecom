import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import OtpInput from "react-otp-input";
import fashion from "../../asset/fashion.png"; // Import your background image
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa"; // Import icons

const Login = ({ openModal, setOpenModal }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleContinue = () => {
    if (phoneNumber) {
      setShowOtpInput(true);
      console.log("Sending OTP to:", phoneNumber);
    } else {
      alert("Please enter a phone number.");
    }
  };

  const handleOtpSubmit = () => {
    console.log("OTP submitted:", otp);
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="xl"
        className="backdrop-blur-sm"
      >
        <Modal.Body className="w-full p-0 relative overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${fashion})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width:"100%"
            }}
          ></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full gap-8">
            {/* Left Side (Shop Categories) */}
            <div className="bg-white/30 backdrop-blur-lg p-6 md:p-12 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Shop</h2>
              <ul>
                <li className="mb-2">New Arrivals</li>
                <li className="mb-2">Winters</li>
                <li className="mb-2">Women's</li>
                <li>Men's</li>
              </ul>
            </div>

            {/* Right Side (Login/Signup) */}
            <div className="bg-white/30 backdrop-blur-lg p-6 md:p-12 h-full flex flex-col justify-center items-center">
              <h3 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">
                LOGIN/SIGNUP
              </h3>
              {!showOtpInput ? (
                <>
                  <div className="mb-6 w-full max-w-md">
                    <input
                      type="tel"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter Mobile Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <Button
                    color="blue"
                    onClick={handleContinue}
                    className="w-full max-w-md mb-4"
                  >
                    Continue
                  </Button>
                </>
              ) : (
                <>
                  <p className="mb-4">Enter OTP sent to {phoneNumber}</p>
                  <div className="mb-6">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="w-10 h-10 border border-gray-300 rounded text-center mx-1 focus:ring-blue-500 focus:border-blue-500"
                        />
                      )}
                      inputStyle="w-10 h-10 border border-gray-300 rounded text-center mx-1 focus:ring-blue-500 focus:border-blue-500"
                      containerStyle="flex justify-center"
                    />
                  </div>
                  <Button
                    color="blue"
                    onClick={handleOtpSubmit}
                    className="w-full max-w-md"
                  >
                    Submit OTP
                  </Button>
                </>
              )}
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                OR
              </p>
              <div className="flex space-x-4 mt-4">
                {" "}
                {/* Social login buttons */}
                <Button
                  color="gray"
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <FaGoogle />
                </Button>
                <Button
                  color="gray"
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <FaApple />
                </Button>
                <Button
                  color="gray"
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <FaFacebookF />
                </Button>
              </div>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <a
                  href="/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Register Now
                </a>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
