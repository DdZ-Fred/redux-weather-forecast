import React, { PropTypes, Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { connect } from 'react-redux';

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
          <Sparklines
            height={120}
            width={180}
            data={temperature}>
              <SparklinesLine color="red"/>
            </Sparklines>
        </td>
        <td>
          <Sparklines
            height={120}
            width={180}
            data={pressure}>
              <SparklinesLine color="blue"/>
            </Sparklines>
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
