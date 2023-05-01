import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { modalsError } from "../helpers/modalsErrors";
import {
  setBookServiceData,
  step3ValidationsChange,
} from "../redux/ServiceSlice";

export default function Step3() {
  const [location, setLocation] = useState({ city: "dubai", country: "UAE" });
  const [customerEmail] = useState();

  const dispatch = useDispatch();
  const setLocations = (key, value) => {
    let data = { ...location };
    data[key] = value;
    setLocation({ ...data });
    if (Object.values(location).length > 5) {
      dispatch(step3ValidationsChange(false));
      dispatch(setBookServiceData({ location: { ...location, [key]: value } }));
    }
  };
  const setEmail = (value) => {
    dispatch(setBookServiceData({ from: value }));
  };
  return (
    <div>
      <div className="location">
        <input
          type="text"
          placeholder="Adress short Name"
          value={location["address"]}
          onChange={(e) => setLocations("address", e.target.value)}
        />
      </div>
      <div className="all_radio">
        <input type="radio" className="show" id="toggle1" name="type" />
        <label for="toggle1" value="villa">
          Villa
        </label>
        <input type="radio" className="hide" id="toggle2" name="type" />
        <label for="toggle2" value="appartment">
          Appartment
        </label>
      </div>
      <div className="flexi_inputs">
        <input
          type="number"
          placeholder="Apaert/Villa Number"
          value={location["villNumber"]}
          onChange={(e) => setLocations("villNumber", e.target.value)}
        />
        <input
          type="text"
          placeholder="Street name"
          value={location["street"]}
          onChange={(e) => setLocations("street", e.target.value)}
        />
      </div>
      <div className="location">
        <input
          type="email"
          placeholder="Your Email "
          value={customerEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="location">
        <input
          type="text"
          placeholder="Community/Building name "
          value={location["building"]}
          onChange={(e) => setLocations("building", e.target.value)}
        />
      </div>
      <div className="select_city">
        <select name="city" id="city">
          <option value="dubai">dubai</option>
        </select>
      </div>
      <div className="location">
        <input type="text" placeholder="UAE " disabled />
      </div>
    </div>
  );
}
