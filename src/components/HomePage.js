import React from 'react';
import { AppBar, Toolbar, Button, TextField, Grid, Typography, Container, CssBaseline, makeStyles } from '@material-ui/core';

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
    <div className={classes.headerNavBar}>
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
    </div>
  );
};

    const Hero = () => {
        const [vehicleRegistrationNumber, setVehicleRegistrationNumber] = React.useState('');
        const classes = useStyles();
      
        const handleChange = (event) => {
          setVehicleRegistrationNumber(event.target.value);
        };
      
        return (
          <section className={`${classes.heroSection} ${classes.whiteBackground}`}>
            <Container maxWidth="lg">
              <Typography variant="h4" gutterBottom>
                Find Help with Your Car Issues
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
                        background: '#0460cc', // Set the background color to #0460cc
                        width: '50%',
                      }}
                    >
                      SEARCH
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </section>
        );
      };
  

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.whiteBackground}>
      <CssBaseline />
      <InnerHeader />
      <HeaderNavBar />
      <Hero />
    </div>
  );
};

export default App;
