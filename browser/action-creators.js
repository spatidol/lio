import 'whatwg-fetch';
export const RECEIVE_LIOS = 'RECEIVE_LIOS';
export const SELECT_LIO = 'SELECT_LIO';



////////sync action creators
const receiveLios = function (lios) {
  return {
    type: RECEIVE_LIOS,
    receivedLios: lios
  };
};


const selectLio = function (lio) {
  return {
    type: SELECT_LIO,
    selectedLio: lio,
  };
};


/////////thunk action creators

export const loadLios = function (location) {
  return function (dispatch) {
    fetch(`/api/brunchplaces/${location.params.location}`)
      .then(res => res.json())
      .then(brunchplaces => {
        dispatch(receiveBrunchPlaces(brunchplaces.results));
      })
      .catch(err => console.error(err));
  };
};

export const loadLio = function (brunchId) {
  return function (dispatch) {
    fetch(`/api/brunchplace/${brunchId}`)
      .then(res => res.json())
      .then(brunch => {
        return dispatch(selectBrunch(brunch.result));
      })
      .catch(err => console.error(err));
  };
};

