import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useSelector, useDispatch } from "react-redux";
import Store from "../redux/Store";
import { addItem, popItem } from "../redux/Slice1";

const Navbar = ({ setuser }) => {
  const Slice1 = useSelector((Store) => Store.Sliceone.list);
  const dispatch = useDispatch();
  const user = useContext(UserContext);
  const handlechange = (e) => {
    setuser(e.target.value);
  };
  const popinslice = () => {
    dispatch(popItem());
  };
  const addinslice = () => {
    dispatch(addItem("kya add karoon"));
  };
  return (
    <ul className="flex p-3 m-3">
      <Link to="/" className="px-4">
        Home
      </Link>
      <Link to="/about" className="px-4">
        About
      </Link>
      <Link to="/service" className="px-4">
        Service
      </Link>
      <Link to="/contact" className="px-4">
        Contact
      </Link>
      <h1 className="font-bold text-red-700">{user.user.name}</h1>
      <label htmlFor="input" className="mx-10">
        Type Here
      </label>
      <input
        type="text"
        name="input"
        className="border border-red-600"
        onChange={(e) => handlechange(e)}
      />
      <h1 className="px-6">store list {Slice1.length}</h1>{" "}
      <button
        className="bg-blue-700 rounded-sm px-2"
        onClick={() => addinslice()}
      >
        add in slice1
      </button>
      <button
        className="bg-blue-700 rounded-sm px-2 mx-5"
        onClick={() => popinslice()}
      >
        pop in slice1
      </button>
    </ul>
  );
};

export default Navbar;
