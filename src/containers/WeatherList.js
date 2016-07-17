import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import CityMap from '../components/CityMap';

const propTypes = {
  weather: PropTypes.array.isRequired,
};

class WeatherList extends Component {

  renderCityWeather(cityData) {
    const { name, coord } = cityData.city;
    console.log(`${name} coordinates:`, coord);
    const temperature = cityData.list.map(item => item.main.temp - 273.15);
    const pressure = cityData.list.map(item => item.main.pressure);
    const humidity = cityData.list.map(item => item.main.humidity);

    return (
      <tr key={name}>
        <td>
          <CityMap lat={coord.lat} lng={coord.lon}/>
        </td>
        <td>
          <Chart data={temperature} color="red" unit="°C"/>
        </td>
        <td>
          <Chart data={pressure} color="black" unit="hPa"/>
        </td>
        <td>
          <Chart data={humidity} color="blue" unit="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
          <th>City</th>
          <th>Temperature (°C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityWeather)}
        </tbody>
      </table>
    );
  }
}
WeatherList.propTypes = propTypes;

function mapStateToProps({ weather }) {
  return {
    weather,
  };
}

export default connect(mapStateToProps)(WeatherList);
