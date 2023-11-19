import React from "react";
import { Card } from "antd";
import "../index.css";
import brakesIcon from "./images/icons/brake-icon.svg";
import wiperIcon from "./images/icons/wiper-icon.svg";
import batteryIcon from "./images/icons/battery-icon.svg";
import bulbIcon from "./images/icons/lamp-icon.svg";
import oilIcon from "./images/icons/oil-icon.svg";

const Categories = ({ onCategorySelect }) => {
  return (
    <Card title="Car Part" className="grid-container">
      <div className="grid-row">
        <button
          className="RepairOption"
          onClick={() => onCategorySelect("Brakes")} // Pass the category name "Brakes"
        >
          <img src={brakesIcon} alt="Brakes Icon" />
          Brakes
        </button>

        <button
          className="RepairOption"
          onClick={() => onCategorySelect("Wipers")} // Pass the category name "Wipers"
        >
          <img src={wiperIcon} alt="Wipers Icon" />
          Wipers
        </button>

        <button
          className="RepairOption"
          onClick={() => onCategorySelect("Battery")} // Pass the category name "battery"
        >
          <img src={batteryIcon} alt="Battery Icon" />
          Battery
        </button>

        <button
          className="RepairOption"
          onClick={() => onCategorySelect("Bulb")} // Pass the category name "bulb"
        >
          <img src={bulbIcon} alt="Bulb Icon" />
          Bulb
        </button>

        <button
          className="RepairOption"
          onClick={() => onCategorySelect("Oil")} // Pass the category name "oil"
        >
          <img src={oilIcon} alt="Oil Icon" />
          Oil
        </button>
      </div>
    </Card>
  );
};

export default Categories;
