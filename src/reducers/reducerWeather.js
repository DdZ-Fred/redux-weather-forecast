import { FETCH_WEATHER } from '../actions';

export default function (state = [], action) {
  console.log('Action received:', action);
  // console.log('Data:', action.payload.data);
  switch (action.type) {

    case FETCH_WEATHER: {
      // console.log(`Action ${FETCH_WEATHER} received!`);
      return [
        ...state,
        action.payload.data,
      ];
    }
    default: {
      return state;
    }

  }
}
