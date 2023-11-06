import React, { useState } from 'react';
import axios from 'axios';

function VehicleInfo() {
  // here we state our variables to manage the registration number input and the vehicle data
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [vehicleData, setVehicleData] = useState(null);

  // added hashtags for security purposes
  const apiKey = '################################';

  // this function we use to fetch the vehicle information from the DVLA API
  const fetchVehicleInfo = async () => {
    try {
      /* we send a POST request to the '/vehicle-enquiry/v1/vehicles' endpoint 
      and we use the proxy from package.json file with the registrationNumber 
      as the request payload and the API key as a header and this takes in 
      the registration number as the parameter */

      /* i had to add the rest of the api to the package json because of 
      that api error issue we kept on getting */
      const response = await axios.post(
        '/vehicle-enquiry/v1/vehicles',
        {
          registrationNumber,
        },
        {
          headers: {
            'x-api-key': apiKey,
          },
        }
      );
      // we set the retrieved vehicle data in the state
      setVehicleData(response.data);
    } catch (error) {
      // we try and handle errors, and log them to the console
      console.error('We have an Error fetching the data:', error);
    }
  };

  // below we return the car information, would be better to split this data up and just return what we need
  return (
    <div>
      <h1>Car information</h1>
      <input
        type="text"
        placeholder="Enter Registration Number"
        value={registrationNumber}
        // we update the registrationNumber state when the input value changes
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />
      <button onClick={fetchVehicleInfo}>Get Vehicle Info</button>
      {vehicleData && (
        <div>
          <h2>Vehicle Information</h2>
          {/* here we display the retrieved vehicle data as a formatted JSON 
              we could do with just returning the vehicle information that we need (the make)
          */}
          <pre>{JSON.stringify(vehicleData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default VehicleInfo;
