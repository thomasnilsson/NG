import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // New Place added
    case ADD_PLACE:
      let place = {
        key: Math.random() + "",
        name: action.placeName,
        image: {
          uri: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
        }
      };
      return {
        ...state,
        places: state.places.concat([place])
      };
    // Place Deleted
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place !== state.selectedPlace)
      };
    // Place Selected (given a key)
    case SELECT_PLACE:
      let place = state.places.find(p => p.key === key);
      return {
        ...state,
        selectedPlace: place
      };
    // De-Select current place
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
