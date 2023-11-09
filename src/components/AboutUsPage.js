import React from "react";
import { Descriptions } from "antd";

const AboutUsPage = () => {
  return (
    <div className="custom-header">
      <h1>About Us</h1>
      <div className="content-container">
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="About Us">
            Welcome to our revolutionary automotive assistance web application!
            Our platform is designed with your convenience in mind, offering a
            seamless experience for all your car maintenance needs. Ever found
            yourself puzzled by a car issue, desperately searching for the right
            tutorial to guide you through the repair process? Look no further.
            With our intuitive web application, all you need is your vehicle's
            registration plate. Simply enter the details, click on the specific
            part you're looking to repair—whether it's brakes, wipers, battery,
            bulb, or oil! We provide you with a tailor-made video tutorial,
            perfectly matched to your vehicles make. No more endless scrolling
            through generic boring and wrong tutorials that may or may not apply
            to your car model. Our W ensures that you receive precise, relevant,
            and high-quality video content to assist you in maintaining and
            repairing your vehicle. Empower yourself with the knowledge and
            skills to tackle car repairs confidently. Say good bye to the
            uncertainties of DIY car maintenance. Embrace a smarter, more
            personalized approach with our web application. Your car deserves
            the best, and so do you. Welcome to a new era of hassle-free car
            care! Welcome to Reg-Repair!
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default AboutUsPage;
