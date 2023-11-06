import React, { useState } from 'react';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  whiteAppBar: {
    background: 'white',
    padding: 0,
    boxShadow: 'none',
    marginTop: 0,
  },
  headerNavBar: {
    borderTop: '1px solid #e7e7e7',
    borderBottom: '1px solid #e7e7e7',
  },
  heroSection: {
    padding: theme.spacing(6, 0),
    textAlign: 'center',
  },
  whiteBackground: {
    background: 'white',
  },
  smallTextField: {
    width: '200px',
    border: '2px solid black',
    borderRadius: '5px',
    background: 'grey',
  },
  submitButton: {
    marginTop: '20px',
  },
}));

function App() {
  const classes = useStyles;

  // here we state our variables to manage the registration number input and the vehicle data
  const [vehicleRegistrationNumber, setVehicleRegistrationNumber] = useState('');
  const [vehicleData, setVehicleData] = useState(null);

  // added hashtags for security purposes until we have a proper fix for it
  const apiKey = '################################';

  const handleChange = (event) => {
    setVehicleRegistrationNumber(event.target.value);
  };

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
          registrationNumber: vehicleRegistrationNumber,
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
    <div className={classes.whiteBackground}>
      <CssBaseline />
      <AppBar position="static" className={classes.whiteAppBar}>
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container alignItems="center">
              <Grid item>
                <img src="/images/logo.png" alt="Logo" />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <div className={classes.headerNavBar}>
        <AppBar position="static" className={classes.whiteAppBar}>
          <Toolbar>
            <Grid container justify="center">
              {/* need to add brand logos
              {brandLogos.map((logo) => (
                <Grid item key={logo}>
                  <Button>
                    <img src={logo} alt="Brand logo" style={{ maxWidth: '100%' }} />
                  </Button>
                </Grid>
              ))} */}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <section className={`${classes.heroSection} ${classes.whiteBackground}`}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Give us your registration number and we will give you your repairs!
          </Typography>
          <Typography variant="body1" paragraph>
            Enter your vehicle registration number to get started
          </Typography>
          <Grid container alignItems="center" justify="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                  id="filled-basic"
                  name="vehicleRegistrationNumber"
                  label="Enter reg"
                  placeholder="Enter reg"
                  value={vehicleRegistrationNumber}
                  onChange={handleChange}
                  variant="filled"
                  fullWidth
                  style={{
                    marginBottom: '10px',
                    border: '2px solid black',
                    borderRadius: '5px',
                    width: '50%',
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    border: '2px solid black',
                    borderRadius: '5px',
                    background: '#0460cc',
                    width: '50%',
                  }}
                  onClick={fetchVehicleInfo}
                >
                  SEARCH
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
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

export default App;
