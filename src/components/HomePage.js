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
import regRepairImage from "./images/icons8-repair-64.png";

import Categories from "./Categories"; // Import the Categories component


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
    const [showCategories, setShowCategories] = useState(false); // State to control Categories component visibility
  
    const onClick = (e) => {
      console.log("click ", e);
      setCurrent(e.key);
    };
  
    const apiKey = "KegP95AJ9mVSmOSEwMIN2r77qfOiefq5o5dJ3306";
  
    const fetchVehicleInfo = async () => {
      try {
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
        setVehicleData(response.data);
        setShowCategories(true); // Set the state to show Categories component
      } catch (error) {
        console.error("We have an Error fetching the data:", error);
      }
    };
  
    return (
        <div>
        <div className="inner-header">
          <img
            src={regRepairImage}
            alt="Logo"
            style={{ width: "", marginLeft: "20px" }}
          />
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
          <div className="vehicle-info">
            <h2>Vehicle Information</h2>
            <pre>{JSON.stringify(vehicleData, null, 2)}</pre>
          </div>
        )}
  
        {showCategories && (
          <div className="categories-container">
            <Categories />
          </div>
        )}
      </div>
    );
  }

  
export default HomePage;