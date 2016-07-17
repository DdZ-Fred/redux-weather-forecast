import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

const propTypes = {
  weather: PropTypes.array.isRequired,
};

class WeatherList extends Component {

  renderCityWeather(cityData) {
    const { name } = cityData.city;
    const temperature = cityData.list.map(item => item.main.temp);
    const pressure = cityData.list.map(item => item.main.pressure);
    const humidity = cityData.list.map(item => item.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temperature} color="red"/>
        </td>
        <td>
        </td>
        <td></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
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
