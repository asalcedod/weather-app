import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ForecastExtended from './components/ForecastExtended';
import './App.css';
const cities = [
  "Barranquilla,co",
  "Bogota,co",
  "Antioquia,co",
  "Cali,co",
  "Cartagena,co",
  "Santa Marta,co"
]
class App extends Component {
  
  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectionLocation = city => {
    this.setState({ city });
  };

  render() {
    const {city} = this.state;
    return (
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variante='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <LocationList cities = {cities} onSelectedLocation = {this.handleSelectionLocation}></LocationList>
            </Col>
            <Col xs={12} sm={6}>
              <Paper elevation={4}>
                <div className="details">
                  {
                    city &&
                    <ForecastExtended city={city}>      
                    </ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
