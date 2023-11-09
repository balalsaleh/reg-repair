import React, { useState } from "react";
import axios from "axios";
import {
  AppstoreOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import "../index.css";
import regRepairImage from "./images/icons8-repair-64.png";
// Import the Categories component
import Categories from "./Categories";
// Import the RepairVideo component
import RepairVideo from "./YTvideo";

// here we define an array of navigation items
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
  const [selectedOption, setSelectedOption] = useState(null);
  const [current, setCurrent] = useState("mail");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [vehicleData, setVehicleData] = useState(null);
  const [showCategories, setShowCategories] = useState(false);

  // Function to handle menu item clicks
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  // Use an API key from environment variables
  const apiKey = process.env.REACT_APP_API_KEY;

  // this function is linked to a button to fetch vehicle information from the DVLA API
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
      setShowCategories(true);
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

      {/* this is for the navigation menu */}
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>

      <div className="banner">
        <div className="banner-content">
          <h1>Enter your Reg, find your Repair!</h1>
          <input
            type="text"
            className="regInput"
            placeholder="ENTER REG"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>
        <div className="background-half"></div>
      </div>

      <div className="searchButton-container">
        {/* this is the button to trigger fetching vehicle information */}
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={fetchVehicleInfo}
        >
          Search
        </Button>
      </div>

      {/* This is where we display the car information */}
      {vehicleData && (
        <div className="vehicle-container">
          <h2>You drive a {vehicleData.make}.</h2>
          <p>Pick your repair from the options below:</p>
        </div>
      )}

      {/* here we render the Categories component when showCategories is true */}
      {showCategories && (
        <div className="categories-container">
          <Categories onCategorySelect={setSelectedOption} />
        </div>
      )}

      {/* This is where we display the video */}
      {selectedOption && (
        <div className="repair-video-container">
          <RepairVideo
            repairOption={selectedOption}
            vehicleData={vehicleData}
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;
