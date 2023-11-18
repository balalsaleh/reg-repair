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
import AboutUsPage from "./AboutUsPage";
import ContactUsPage from "./ContactUsPage";

// Navigation menu items
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
  // State variables
  const [selectedOption, setSelectedOption] = useState(null);
  const [current, setCurrent] = useState("regRepair");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [vehicleData, setVehicleData] = useState(null);

  // Handle menu item click
  const onClick = (e) => {
    setCurrent(e.key);
    setVehicleData(null);
  };

  // Fetch vehicle data from API
  const fetchVehicleData = async () => {
    try {
      const data = await fetchVehicleInfo(registrationNumber);
      setVehicleData(data);
    } catch (error) {
      console.error("Error fetching vehicle data: ", error);
    }
  };

  return (
    <div>
      {/* Header */}
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

      {/* Main content based on selected menu item */}
      {current === "regRepair" && (
        <div>
          {/* Reg-Repair Banner */}
          <div className="banner">
            <div className="banner-content">
              <h1>Enter your Reg, and find your Repair!</h1>
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

          {/* Search button */}
          <div className="searchButton-container">
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={fetchVehicleData}
            >
              Search
            </Button>
          </div>

          {/* Display car information and related components */}
          {vehicleData && (
            <div className="vehicle-container">
              <h2>
                You drive a {vehicleData.colour} {vehicleData.make}, this
                vehicle was manufactured in {vehicleData.yearOfManufacture}.
              </h2>
              <p>Pick a repair from the options below:</p>

              {/* Categories container */}
              <div className="categories-container">
                <Categories onCategorySelect={setSelectedOption} />
              </div>

              {/* Repair video container */}
              {selectedOption && (
                <div className="repair-video-container">
                  <RepairVideo
                    repairOption={selectedOption}
                    vehicleData={vehicleData}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Display About Us page */}
      {current === "aboutUs" && (
        <div>
          <AboutUsPage />
        </div>
      )}

      {/* Display Contact Us page */}
      {current === "contactUs" && (
        <div>
          <ContactUsPage />
        </div>
      )}
    </div>
  );
}

export default HomePage;
