import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const fetchVehicleInfo = async (registrationNumber) => {
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
    return response.data;
  } catch (error) {
    if (error.response) {
      /* The request was made and the server responded with a status code
        that falls out of the range of 200, we took these from the dvla site
     
        400	Bad Request	Bad Request
        404	Not Found	Vehicle Not Found
        500	Internal Server Error	Internal Server Error
        503	Service Unavailable	Service Unavailable
     */
      if (error.response.status === 400) {
        console.error("Bad Request:", error.response.data.message);
        throw new Error("Bad Request: " + error.response.data.message);
      } else if (error.response.status === 404) {
        console.error("Vehicle Not Found:", error.response.data.message);
        throw new Error("Vehicle Not Found: " + error.response.data.message);
      } else if (error.response.status === 500) {
        console.error("Internal Server Error:", error.response.data.message);
        throw new Error(
          "Internal Server Error: " + error.response.data.message
        );
      } else if (error.response.status === 503) {
        console.error("Service Unavailable:", error.response.data.message);
        throw new Error("Service Unavailable: " + error.response.data.message);
      }
    } else if (error.request) {
      // here we try and hande other errors
      console.error("No response received from server");
      throw new Error("No response received from server");
    } else {
      // setting up the request that triggered an error
      console.error("Error setting up the request:", error.message);
      throw new Error("Error setting up the request: " + error.message);
    }
  }
};

export { fetchVehicleInfo };
