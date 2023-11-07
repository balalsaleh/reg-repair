import React, { useState } from "react";
import axios from "axios";
import {
  AppstoreOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import "../index.css";
// import variables for logo
import regRepairImage from "./images/reg-repair.png";

const items = [
  {
    label: "Search",
    key: "search",
    icon: <SearchOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

function HomePage() {
  const [current, setCurrent] = useState("mail");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [vehicleData, setVehicleData] = useState(null);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  // here we replace the hastags with our api this is just for now
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchVehicleInfo = async () => {
    try {
      /* We send a POST request to the '/vehicle-enquiry/v1/vehicles' endpoint 
         and use the proxy from package.json file with the registrationNumber 
         as the request payload and the API key as a header and this takes in 
         the registration number as the parameter */
      const response = await axios.post(
        "/vehicle-enquiry/v1/vehicles",
        {
          registrationNumber,
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      // We set the retrieved vehicle data in the state
      setVehicleData(response.data);
    } catch (error) {
      // We try and handle errors, and log them to the console
      console.error("We have an Error fetching the data:", error);
    }
  };

  return (
    <div>
      <div className="inner-header">
        <img src={regRepairImage} alt="Logo" />
      </div>

      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>

      <div className="banner">
        <div className="banner-content">
          <h1>Enter your Reg to find your Auto Repair</h1>
          <p>Some additional text goes here.</p>
          <input
            type="text"
            className="regInput"
            placeholder="ENTER REG"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>
      </div>

      <div className="searchButton-container">
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={fetchVehicleInfo}
        >
          Search
        </Button>
      </div>

      {vehicleData && (
        <div className="vehicle-container">
          <h2>You drive a {vehicleData.make}.</h2>
          <p>Pick your repair below:</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
