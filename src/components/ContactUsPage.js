import React from "react";
import { Descriptions } from "antd";
import "../index.css";

const ContactUsPage = () => {
  return (
    <div className="custom-header">
      <h1>Contact Us</h1>
      <div className="content-container Contact">
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Contact Information">
            <p className="contact-us-text">
              If you have any questions you can contact us on GitHub:
            </p>
            <ul className="contact-us-text">
              <li>
                <strong>Balal Saleh</strong>
                <br />
                GitHub: <a href="https://github.com/balalsaleh">@balalsaleh</a>
              </li>
              <li>
                <strong>Faheem Ali</strong>
                <br />
                GitHub: <a href="https://github.com/b70b70">@b70b70</a>
              </li>
            </ul>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default ContactUsPage;
