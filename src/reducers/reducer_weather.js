import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; // ... inside [  ] means [ city, city, city] and NOT [city, [city, city]]
  }

  return state;
}
