import React, { PropTypes } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  // a: previousValue(here initialized to 0)
  // b currentValue(here starts with the first value of the array)
  return Math.round(
    data.reduce((a, b) => a + b, 0)
    /
    data.length
  );
}

const propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

function Chart({ data, color, unit }) {
  return (
    <div>
    <Sparklines
      height={120}
      width={180}
      data={data}>
        <SparklinesLine color={color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{average(data)} {unit}</div>
    </div>
  );
}
Chart.propTypes = propTypes;

export default Chart;
