import React, { useState } from "react";
import twst from "../../asset/Logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { openMobileNav } from "../../utils/slice/generalSlice.js";
import MobilNav from "./MobilNav.jsx";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import Login from "../auth/Login.jsx";
import { FaRegUser } from "react-icons/fa";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const { openNav } = useSelector((store) => store.general);
  const [openModal, setOpenModal] = useState(false);
  const [isLogin] = useState(true);

  return (
    <>
      <nav className="w-full bg-black bg-opacity-20 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-6 py-6 flex items-start justify-between ">
          <div className="hidden md:block">
            <ul className="flex gap-4 cursor-pointer text-black ">
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <Link to="/">
              <img
                src={twst}
                alt="TWST"
                width="65px"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-4 cursor-pointer text-black">
              <li>
                <Dropdown label="Locations" inline>
                  <Dropdown.Item>
                    <div className="flex gap-3">
                      <img src="🇸🇦" alt="flag" srcset="" />
                      <p>London</p>
                    </div>
                  </Dropdown.Item>
                </Dropdown>
              </li>
              {isLogin ? (
                <Link to="/profile/dashboard">
                  <li>
                    <FaRegUser />
                  </li>
                </Link>
              ) : (
                <li
                  className="bg-gradient-to-r from-orange-300  to-red-600 bg-clip-text text-transparent"
                  onClick={() => setOpenModal(true)}
                >
                  Login
                </li>
              )}
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>

          <div
            className="text-2xl block md:hidden"
            onClick={() => dispatch(openMobileNav())}
          >
            <RiMenu3Line />
          </div>
        </div>
      </nav>
      {openNav && <MobilNav />}
      {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
};

export default NavigationBar;
