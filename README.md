# Reg-Repair Web Application

Welcome to Reg-Repair, your go-to platform for hassle-free car maintenance and repair tutorials.

## Overview

Reg-Repair is an automotive assistance web application designed to provide a seamless experience for all of your car maintenance needs. By simply entering your vehicle's registration plate, you can access tailor-made video tutorials for specific car parts, ensuring you get accurate and relevant repair guidance.

## Features

- **Intuitive Interface:**

Our platform is designed with your convenience in mind, offering a user-friendly and intuitive interface which uses Ant.Design!

- **Personalized Tutorials:**

We use the DVLA API to post a registration number as a paramater which the user puts in and searches via the user interface to return the vehicles make. we then use this as a search query a long with a car part to get tailor-made video tutorials based on your vehicle's make and the specific part you want to repair (brakes, wipers, battery, bulb, or oil).

- **Eliminate Guesswork:**

With this Application we can say goodbye to generic and confusing tutorials. Reg-Repair ensures you receive precise, relevant, and high-quality video content.

## How to use this application?

1. Enter your vehicle's registration plate.
2. Click on the specific part you want to repair (brakes, wipers, battery, bulb, or oil).
3. Enjoy a personalized video tutorial for your car's make.

## Getting Started

To run the Reg-Repair web application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/balalsaleh/reg-repair
   ```

2. Install Dependencies:

   ```bash
   cd reg-repair
   npm install
   ```

3. Navigate to the project directory and run the following command to install the required npm packages:

   ```bash
   npm install antd@^5.11.0 axios@^1.6.1 react@^18.2.0 react-dom@^18.2.0 react-scripts@5.0.1 react-youtube@^10.1.0 web-vitals@^2.1.4
   ```

4. Run the Application
   ```bash
   npm start
   ```

# Deploymenmt

Sadly due to issues with CORS our deployment of the application was unsuccessful, no doubt this is something which can be fixed for the near future. However this deployment would require time, and we were on a time deadline to finish this project.

We tried to use both Netlify and Vercel. These were both unsuccessful.

# Future additions
