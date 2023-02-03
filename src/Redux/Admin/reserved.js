import axios from 'axios';

const GET_RESERVED = 'GET_RESERVED';

const initialState = { reserved: [] };

const Api = 'http://127.0.0.1:3000/api/v1/reservations';

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVED:
      return {
        ...state,
        reserved: action.payload,
      };
    default:
      return state;
  }
};

export const fetchreserved = () => (dispatch) => {
  axios.get(Api).then((res) => {
    const { data } = res;
    dispatch({
      type: GET_RESERVED,
      payload: data,
    });
  });
};
export default fetchReducer;
