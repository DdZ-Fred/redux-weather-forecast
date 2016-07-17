import React, { PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};


function CityMap({ lat, lng }) {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{ height: '100%' }}></div>}
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat, lng }}/>
      }
    />
  );
}
CityMap.propTypes = propTypes;

export default CityMap;
