import React from 'react';
import { AppBar, Toolbar, Button, TextField, Grid, Typography, Container, CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  whiteAppBar: {
    background: 'white', // Set the background color to white
    boxShadow: 'none', // Remove box shadow
    marginTop: 0, // Remove top margin
  },
  heroSection: {
    padding: theme.spacing(6, 0), // Adjust padding to remove space above AppBar
  },
}));

const InnerHeader = () => {
  const classes = useStyles();

  return (
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
  );
};

const HeaderNavBar = () => {
  const classes = useStyles();
  const brandLogos = [
    '/images/brand-logo-1.png',
    '/images/brand-logo-2.png',
    '/images/brand-logo-3.png',
  ];

  return (
    <AppBar position="static" className={classes.whiteAppBar}>
      <Toolbar>
        <Grid container justify="center">
          {brandLogos.map((logo) => (
            <Grid item key={logo}>
              <Button>
                <img src={logo} alt="Brand logo" style={{ maxWidth: '100%' }} />
              </Button>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const Hero = () => {
  const [vehicleRegistrationNumber, setVehicleRegistrationNumber] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setVehicleRegistrationNumber(event.target.value);
  };

  return (
    <section className={classes.heroSection}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Find Help with Your Car Issues
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Enter your vehicle registration number to get started
        </Typography>
        <TextField
          id="vehicleRegistrationNumber"
          name="vehicleRegistrationNumber"
          label="Vehicle registration number"
          value={vehicleRegistrationNumber}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: '20px' }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Container>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <CssBaseline />
      <InnerHeader />
      <HeaderNavBar />
      <Hero />
    </div>
  );
};

export default App;
