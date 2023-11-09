import React, { useState } from "react";
import {
  SearchOutlined,
  AppstoreOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Menu, Button } from "antd";
import "../index.css";
import regRepairImage from "./images/icons8-repair-64.png";
import Categories from "./Categories";
import RepairVideo from "./YTvideo";
import { fetchVehicleInfo } from "./DvlaApi";

const items = [
  {
    label: "Reg-Repair",
    key: "regRepair",
    icon: <SearchOutlined />,
  },
  {
    label: "About us",
    key: "aboutUs",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Contact us",
    key: "contactUs",
    icon: <ContactsOutlined />,
  },
];

function HomePage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [current, setCurrent] = useState("mail");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [vehicleData, setVehicleData] = useState(null);
  const [showCategories, setShowCategories] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const fetchVehicleData = async () => {
    try {
      const data = await fetchVehicleInfo(registrationNumber);
      setVehicleData(data);
      setShowCategories(true);
    } catch (error) {
      console.error("Error fetching vehicle data: ", error);
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

      {/* Navigation menu */}
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
        {/* Button to trigger fetching vehicle information */}
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={fetchVehicleData}
        >
          Search
        </Button>
      </div>

      {/* Display car information */}
      {vehicleData && (
        <div className="vehicle-container">
          <h2>You drive a {vehicleData.make}.</h2>
          <p>Pick your repair from the options below:</p>
        </div>
      )}

      {/* Render Categories component when showCategories is true */}
      {showCategories && (
        <div className="categories-container">
          <Categories onCategorySelect={setSelectedOption} />
        </div>
      )}

      {/* Display the video */}
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
