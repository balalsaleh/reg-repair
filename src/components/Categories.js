import React from "react";
import { Card } from "antd";
import "../index.css";
import brakesIcon from "./images/brake-icon.svg";
import batteryIcon from "./images/battery-icon.svg";
import bulbIcon from "./images/lamp-icon.svg";
import oilIcon from "./images/oil-icon.svg";
import wiperIcon from "./images/wiper-icon.svg";

const App = () => (
  <Card title="Car Part" className="grid-container">
    <div className="grid-row">
      <button className="grid-item">
        <img src={brakesIcon} alt="Brakes Icon" />
        Brakes
      </button>
      <button className="grid-item">
        <img src={wiperIcon} alt="Wipers Icon" />
        Wipers
      </button>
      <button className="grid-item">
        <img src={batteryIcon} alt="Battery Icon" />
        Battery
      </button>
      <button className="grid-item">
        <img src={bulbIcon} alt="Bulbs Icon" />
        Bulbs
      </button>
      <button className="grid-item">
        <img src={oilIcon} alt="Oil Icon" />
        Engine Oil
      </button>
    </div>
  </Card>
);

export default App;
