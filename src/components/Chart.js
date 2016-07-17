import React, { PropTypes } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const propTypes = {
  data: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};

function Chart({ data, color }) {
  return (
    <div>
    <Sparklines
      height={120}
      width={180}
      data={data}>
        <SparklinesLine color={color}/>
      </Sparklines>
    </div>
  );
}
Chart.propTypes = propTypes;

export default Chart;
